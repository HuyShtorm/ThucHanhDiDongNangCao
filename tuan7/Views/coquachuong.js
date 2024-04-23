import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated, Easing, TextInput, TouchableOpacity } from 'react-native';

const Appchuong = () => {
  const [textColor] = useState(new Animated.Value(0)); // Màu của text
  const [isShowingInputs, setIsShowingInputs] = useState(false); // Trạng thái hiển thị của text inputs

  const spinValue = useRef(new Animated.Value(0)).current; // Giá trị xoay của hình tròn
  const bellAnimation = useRef(new Animated.Value(0)).current; // Animation của quả chuông
  const [username, setUsername] = useState(''); // Tên người dùng
  const [password, setPassword] = useState(''); // Mật khẩu
  
  // Hàm thực hiện xoay vòng liên tục cho hình tròn
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // Hàm thực hiện lắc qua lắc lại liên tục cho quả chuông
  const bellRotate = bellAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '30deg'],
  });
  const textPositionX = useRef(new Animated.Value(0)).current; // Giá trị vị trí X của văn bản

  // Hàm thực hiện di chuyển văn bản qua lại liên tục
  const moveText = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(textPositionX, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(textPositionX, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  useEffect(() => {
    moveText(); 
    // Animation cho màu của text từ Green đến Red, lặp lại liên tục
    Animated.loop(
      Animated.sequence([
        Animated.timing(textColor, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(textColor, {
          toValue: 0,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();

    // Animation cho hình tròn xoay vòng liên tục
    Animated.loop(
      Animated.timing(
        spinValue,
        {
          toValue: 1,
          duration: 4000,
          easing: Easing.linear,
          useNativeDriver: true,
        }
      )
    ).start();
  moveText(); 
    // Animation cho quả chuông lắc qua lắc lại liên tục
    Animated.loop(
      Animated.sequence([
        Animated.timing(bellAnimation, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bellAnimation, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Hàm hiển thị text inputs từ mờ đến rõ
  const showInputs = () => {
    setIsShowingInputs(true);
   
  };
  const textTranslateX = textPositionX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Thay đổi giá trị này để điều chỉnh khoảng cách di chuyển
  });
  
  return (
    <View style={styles.container}>
      {/* Quả chuông */}
      <Animated.Image
        source={{ uri: 'https://data.batdongsan.com.vn//Articles/CKE/120717/images/suong/967.jpg' }} // Thay đổi URL hình ảnh theo đường dẫn của ảnh bạn muốn sử dụng
        style={[styles.bell, { transform: [{ rotate: bellRotate }] }]}
      />

      {/* Hình tròn */}
      <Animated.Image
        source={{ uri: 'https://thietkenhavanthanh.com/upload/images/bat-quai-la-gi.png' }} // Thay đổi URL hình ảnh bát quái theo đường dẫn của ảnh bạn muốn sử dụng
        style={[styles.circle, { transform: [{ rotate: spin }] }]}
      />

      {/* Dòng text */}
      <Animated.Text style={[styles.text, { color: textColor.interpolate({ inputRange: [0, 1], outputRange: ['green', 'red'] }) ,
      transform: [{ translateX: textTranslateX }],},]}>
       Dòng text đổi màu từ Green đến Red
      </Animated.Text>

      {/* Text inputs */}
      {isShowingInputs && (
  <Animated.View>
    <TextInput
      placeholder="Username"
      style={styles.input}
      value={username}
      onChangeText={setUsername}
    />
    <TextInput
      placeholder="Password"
      style={styles.input}
      value={password}
      onChangeText={setPassword}
    />
  </Animated.View>
)}

      {/* Button Show */}
      {!isShowingInputs && (
        <TouchableOpacity style={styles.button} onPress={showInputs}>
          <Text style={styles.buttonText}>Show</Text>
        </TouchableOpacity>
      )}

      {/* Button Login */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Button Cancel */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cancel</Text>
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
  bell: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 20,
    right: 20,
  },
  circle: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
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

export default Appchuong;
