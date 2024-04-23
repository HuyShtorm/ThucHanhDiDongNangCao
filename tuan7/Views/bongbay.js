import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const Ball = ({ delay }) => {
  const position = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: 1,
          duration: 2000,
          delay: delay,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: 0,
          duration: 0,
          delay: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <Animated.Image
    source={{ uri: 'https://bongbongdep.com/images/202006/goods_img/bom-bong-bong-bay-tai-nha-P2787-1591825930351.jpg' }}
      style={[
        styles.ball,
        {
          transform: [
            {
              translateY: position.interpolate({
                inputRange: [0, 1],
                outputRange: [500, 0],
              }),
            },
          ],
        },
      ]}
    />
  );
};

const Appbong = () => {
  return (
    <View style={styles.container}>
      <Ball delay={0} />
      <Ball delay={500} />
      <Ball delay={1000} />
      {/* Add more balls as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ball: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
    position: 'absolute',
  },
});

export default Appbong;
