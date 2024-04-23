import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, Image } from 'react-native';

// Import hình ảnh từ thư mục của bạn
const yourImage = require('../img/godznghiemtuc.jpg');

const PanResponderExampleurl = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        // Thêm bất kỳ logic nào sau khi người dùng thả hình ảnh (nếu cần)
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.imageContainer, {
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }]}
        {...panResponder.panHandlers}
      >
        <Image
          source={yourImage} // Sử dụng hình ảnh đã import
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
});

export default PanResponderExampleurl;
