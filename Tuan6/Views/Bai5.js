import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View, Image } from 'react-native';

const Bai5 = () => {
  const shipperPosition = useRef(new Animated.Value(0)).current;
  const textScale = useRef(new Animated.Value(1)).current;
  const textColor = useRef(new Animated.Value(0)).current;
  const foodScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shipperPosition, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(shipperPosition, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(textScale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(textScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(textColor, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(textColor, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 }
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(foodScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(foodScale, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      { iterations: -1 }
    ).start();
  }, []);

  const interpolatedTextColor = textColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'red'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../img/shipper.jpg')}
        style={[
          styles.shipper,
          {
            transform: [
              {
                translateX: shipperPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Text
        style={[
          styles.text,
          {
            transform: [{ scale: textScale }],
            color: interpolatedTextColor,
          },
        ]}>
        Shopee cái gì cũng có...
      </Animated.Text>
      <View style={styles.foodContainer}>
        <Animated.Image
          source={require('../img/noodle.jpg')}
          style={[
            styles.food,
            {
              transform: [{ scale: foodScale }],
            },
          ]}
        />
        <Animated.Image
          source={require('../img/coca.jpg')}
          style={[
            styles.food,
            {
              transform: [{ scale: foodScale }],
            },
          ]}
        />
        <Animated.Image
          source={require('../img/banhmi.jpg')}
          style={[
            styles.food,
            {
              transform: [{ scale: foodScale }],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipper: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  foodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  food: {
    width: 50,
    height: 50,
  },
});

export default Bai5;
