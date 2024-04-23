import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing, StyleSheet } from 'react-native';

// Component để thực hiện hiệu ứng mờ mờ đến đậm dần cho dòng chữ
const FadeInText = ({ children }) => {
  const [fadeAnim] = useState(new Animated.Value(0));  // Khởi tạo độ mờ ban đầu: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim, // Giá trị animated để điều khiển
      {
        toValue: 1, // Mục tiêu là hiển thị đầy đủ độ rõ nét
        duration: 3000, // Thời lượng animation là 3000 milliseconds (3 giây)
        easing: Easing.linear, // Hàm làm mềm mại của animation
        useNativeDriver: true, // Sử dụng trình điều khiển native để tối ưu hóa hiệu suất
      }
    ).start(); // Bắt đầu animation
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      {children}
    </Animated.View>
  );
};

// Ứng dụng chính của bạn
const PanRe = () => {
  return (
    <View style={styles.container}>
      {/* Hiển thị 2 dòng text */}
      <FadeInText>
        <Text style={styles.text}>Dòng text thứ nhất</Text>
      </FadeInText>
      <FadeInText>
        <Text style={styles.text}>Dòng text thứ hai</Text>
      </FadeInText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PanRe;
