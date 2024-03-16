import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Image } from 'react-native';

const CatAndMouseApp = () => {
  const mousePosition = useRef(new Animated.Value(0)).current;
  const catPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(mousePosition, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(mousePosition, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(catPosition, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(catPosition, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../img/chuot.jpg')}
        style={[
          styles.mouse,
          {
            transform: [
              {
                translateX: mousePosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['100%', '-30%'],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Image
        source={require('../img/cat.jpeg')}
        style={[
          styles.cat,
          {
            transform: [
              {
                translateY: catPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['100%', '-30%'],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  mouse: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
  cat: {
    width: 50,
    height: 50,
    position: 'absolute',
  },
});

export default CatAndMouseApp;
