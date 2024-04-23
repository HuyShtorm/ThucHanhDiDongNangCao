import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';

const App3 = () => {
  const [isMoving, setIsMoving] = useState(false); // Trạng thái di chuyển của hình
  const position = useRef(new Animated.ValueXY()).current; // Vị trí của hình

  // Hàm bắt đầu di chuyển hình
  const startMoving = () => {
    setIsMoving(true);
    Animated.loop(
      Animated.timing(position, {
        toValue: { x: 200, y: 200 }, // Vị trí mới của hình
        duration: 1000, // Thời gian di chuyển
        useNativeDriver: false, // Sử dụng trình điều khiển native
      })
    ).start();
  };

  // Hàm dừng di chuyển hình
  const stopMoving = () => {
    setIsMoving(false);
    position.stopAnimation();
  };

  // Hàm reset vị trí của hình về ban đầu
  const resetPosition = () => {
    setIsMoving(false);
    position.setValue({ x: 0, y: 0 });
  };

  return (
    <View style={styles.container}>
      {/* <Animated.View style={[styles.shape, { transform: position.getTranslateTransform() }]} /> */}
      <Animated.Image
        source={{ uri: 'https://ss-images.saostar.vn/w800/2024/2/16/pc/1708067810293/g3ot5qgcpd1-gmhjhttr202-9nwkbyga9a3.jpg' }} // Thay đổi URL hình ảnh theo đường dẫn của hình ảnh bạn muốn sử dụng
        style={[styles.image, { transform: position.getTranslateTransform() }]}
      />
      {/* Button Start */}
      <TouchableOpacity style={styles.button} onPress={startMoving}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>

      {/* Button Stop */}
      <TouchableOpacity style={styles.button} onPress={stopMoving}>
        <Text style={styles.buttonText}>Stop</Text>
      </TouchableOpacity>

      {/* Button Restart */}
      <TouchableOpacity style={styles.button} onPress={resetPosition}>
        <Text style={styles.buttonText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 100, height: 100},
  shape: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App3;
