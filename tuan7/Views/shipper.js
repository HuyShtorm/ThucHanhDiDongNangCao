import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, Easing, StyleSheet } from 'react-native';

const Appship = () => {
  const shipperAnimation = useRef(new Animated.Value(0)).current;
  const textAnimation = useRef(new Animated.Value(0)).current;
  const foodAnimations = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];
  const animateShipper = () => {
    Animated.timing(shipperAnimation, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      shipperAnimation.setValue(0);
      animateShipper();
    });
  };
  useEffect(() => {
    animateShipper();
    

    Animated.loop(
      Animated.sequence([
        Animated.timing(textAnimation, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(textAnimation, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();

    foodAnimations.forEach((animation, index) => {
      Animated.loop(
        Animated.timing(animation, {
          toValue: 1,
          duration: 2000,
          delay: index * 500,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    });
  }, []);

  const shipperTranslateX = shipperAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 1500],
  });

  const textSize = textAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 24],
  });

  const foodScale = foodAnimations.map((animation) =>
    animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.5, 1],
    })
  );

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../img/ship.jpg')}
        style={[styles.shipper, { transform: [{ translateX: shipperTranslateX }] }]}
      />
      <Animated.Text style={[styles.text, { fontSize: textSize }]}>Shopee cái gì cũng có...</Animated.Text>
      <View style={styles.foodContainer}>
        <Animated.Image source={require('../img/mi.jpg')} style={[styles.food, { transform: [{ scale: foodScale[0] }] }]} />
        <Animated.Image source={require('../img/coca.png')} style={[styles.food, { transform: [{ scale: foodScale[1] }] }]} />
        <Animated.Image source={require('../img/snack.jpg')} style={[styles.food, { transform: [{ scale: foodScale[2] }] }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shipper: {
    width: 50,
    height: 50,
    position: 'absolute',
    left: -100,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  foodContainer: {
    flexDirection: 'row',
  },
  food: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
});

export default Appship;
