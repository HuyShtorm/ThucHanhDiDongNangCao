import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Title, Button } from 'react-native-paper';

const ProjectManagement = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>
          PROJECT MANAGEMENT
        </Title>
        <Text style={styles.discount}>
          20% OFF
        </Text>
        <Button mode="contained" color="#000080" style={styles.button}>
          Join Now
        </Button>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require('../img/AgentK.png')} style={styles.image} />
      </View>
    </View>
  );
};

export default ProjectManagement;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF00',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 30,
    marginHorizontal: 30,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  discount: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000080',
  },
  imageContainer: {
    marginLeft: 50,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // 50% of the width and height to make it circular
  },
});
