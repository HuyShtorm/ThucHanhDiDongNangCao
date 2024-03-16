import React, { Component } from 'react';
import { View, Animated, StyleSheet, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const BALL_SIZE = 50;

class Bai4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ballAnimations: [],
    };
  }

  componentDidMount() {
    this.generateBallAnimations();
  }

  generateBallAnimations = () => {
    const { ballAnimations } = this.state;

    while (true) {
      const animation = new Animated.Value(0);
      
      Animated.timing(animation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
     
        this.setState({
          ballAnimations: this.state.ballAnimations.filter((anim) => anim !== animation),
        });
      });

      this.setState({
        ballAnimations: [...ballAnimations, animation],
      });
    }
  };

  getRandomPosition = () => {
    return Math.random() * width; 
  };

  render() {
    const { ballAnimations } = this.state;

    return (
      <View style={styles.container}>
        {ballAnimations.map((animation, index) => {
          const translateY = animation.interpolate({
            inputRange: [0, 1],
            outputRange: [height, -BALL_SIZE],
          });

          const opacity = animation.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.5, 0], 
          });

          return (
            <Animated.Image
              key={index}
              source={require('../img/bongbay.jpg')} 
              style={[
                styles.ball,
                {
                  transform: [{ translateY }, { translateX: this.getRandomPosition() }],
                  opacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  ball: {
    position: 'absolute',
    width: BALL_SIZE,
    height: BALL_SIZE,
  },
});

export default Bai4;
