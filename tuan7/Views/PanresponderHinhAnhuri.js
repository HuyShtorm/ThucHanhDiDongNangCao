import React, { useRef } from 'react';
import { View, StyleSheet, PanResponder, Animated, Image } from 'react-native';

const PanResponderExampleHinhAnh = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        // Add any release logic here if needed
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
          source={{ uri: 'https://tintuc-divineshop.cdn.vccloud.vn/wp-content/uploads/2023/12/trailer-dau-tien-cua-godzilla-x-kong-de-che-moi-sieu-bom-tan-2024_656df00ed4feb.png '}} // Thay đổi URL ảnh theo đường dẫn của ảnh bạn muốn sử dụng
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

export default PanResponderExampleHinhAnh;
