import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Easing, Image } from 'react-native';

const MouseAndCatApp = () => {
  const mouseAnimation = useRef(new Animated.Value(0)).current;
  const catAnimation = useRef(new Animated.Value(0)).current;
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    Animated.loop(
      Animated.timing(mouseAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.timing(catAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  useEffect(() => {
    const mousePosition = mouseAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 400],
    });

    const catPosition = catAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-100, 250],
    });

    const checkCollision = () => {
      const collision = Math.abs(mousePosition._value - catPosition._value) < 20;
      if (collision) {
        setIsGameOver(true);
      }
    };

    const interval = setInterval(checkCollision, 100);

    return () => clearInterval(interval);
  }, [isGameOver]);

  return (
    <View style={styles.container}>
      <Animated.Image source={require('../img/mouse.png')} style={[styles.mouse, { left: mouseAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 300] }) }]} />
      <Animated.Image source={require('../img/cat.jpeg')} style={[styles.cat, { bottom: catAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 200] }) }]} />
      {isGameOver && <GameOver />}
    </View>
  );
};

const GameOver = () => (
  <View style={styles.gameOver}>
    <Text style={styles.gameOverText}>Game Over!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mouse: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 250,
  },
  cat: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: 250,
  },
  gameOver: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default MouseAndCatApp;
