import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, TextInput, TouchableOpacity, Image } from 'react-native';

const Appt = () => {
  // Khai báo state và ref cần thiết
  const [textColor] = useState(new Animated.Value(0)); // Màu của text
  const [isShowingInputs, setIsShowingInputs] = useState(false); // Trạng thái hiển thị của text inputs
  const spinValue = useRef(new Animated.Value(0)).current; // Giá trị xoay của hình tròn
  const bellAnimation = useRef(new Animated.Value(0)).current; // Animation của quả chuông
  const mouseAnimation = useRef(new Animated.Value(0)).current; // Animation của con chuột
  const catAnimation = useRef(new Animated.Value(0)).current; // Animation của con mèo

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

  // Hàm thực hiện chuyển động cho con chuột
  const mousePosition = mouseAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 400],
  });

  // Hàm thực hiện chuyển động cho con mèo
  const catPosition = catAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 250],
  });

  // Effect thực hiện các animation khi component được render
  useEffect(() => {
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

    // Animation cho con chuột di chuyển từ trái qua phải liên tục
    Animated.loop(
      Animated.timing(mouseAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Animation cho con mèo di chuyển từ dưới lên trên liên tục
    Animated.loop(
      Animated.timing(catAnimation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // Hàm hiển thị text inputs từ mờ đến rõ
  const showInputs = () => {
    setIsShowingInputs(true);
    Animated.timing(
      textColor,
      {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: false,
      }
    ).start();
  };

  return (
    <View style={styles.container}>
      {/* Quả chuông */}
      <Animated.Image
        source={{ uri: 'https://data.batdongsan.com.vn//Articles/CKE/120717/images/suong/967.jpg' }}
        style={[styles.bell, { transform: [{ rotate: bellRotate }] }]}
      />

      {/* Hình tròn */}
      <Animated.Image
        source={{ uri: 'https://thietkenhavanthanh.com/upload/images/bat-quai-la-gi.png' }}
        style={[styles.circle, { transform: [{ rotate: spin }] }]}
      />

      {/* Dòng text */}
      <Animated.Text style={[styles.text, { color: textColor.interpolate({ inputRange: [0, 1], outputRange: ['green', 'red'] }) }]}>
        Dòng text đổi màu từ Green đến Red
      </Animated.Text>

      {/* Text inputs */}
      {isShowingInputs && (
        <>
          <Animated.TextInput
            placeholder="Username"
            style={styles.input}
          />
          <Animated.TextInput
            placeholder="Password"
            style={styles.input}
          />
        </>
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

      {/* Mouse */}
      <Animated.Image
        source={require('../img/mouse.png')}
        style={[styles.mouse, { left: mousePosition }]}
      />

      {/* Cat */}
      <Animated.Image
        source={require('../img/cat.jpeg')}
        style={[styles.cat, { bottom: catPosition }]}
      />
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
mouse: {
  width: 50,
  height: 50,
  position: 'absolute',
  left: 0,
  top: 250,
},
cat: {
  width: 50,
  height: 50,
  position: 'absolute',
  left: 250,
  bottom: 0,
},
});

export default Appt;
