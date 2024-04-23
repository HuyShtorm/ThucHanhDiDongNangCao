import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Title, Caption, IconButton } from 'react-native-paper';
import StarIcon from '@mui/icons-material/Star';

const PopularCourses = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.header}>
        Popular Courses
      </Title>
      <Caption style={styles.viewMore}>
        View more
      </Caption>

      <View style={styles.courseItem}>
        <Image source={require('../img/phpin.png')} style={styles.courseImage} />
        <View style={styles.courseText}>
          <Text style={styles.courseTitle}>
            PHP Course
          </Text>
          <Text style={styles.courseSubtitle}>
            Intermediate PHP Course
          </Text>
          <View style={styles.starContainer}>
            <StarIcon style={styles.starIcon} />
            <Text style={styles.courseDetails}>
              $59 • 4.2 (1233 reviews) • 18 lessons
            </Text>
          </View>
        </View>
        <Text style={styles.bestSeller}>Best-seller</Text>
      </View>

      <View style={styles.courseItem}>
        <Image source={require('../img/pythonin.png')} style={styles.courseImage} />
        <View style={styles.courseText}>
          <Text style={styles.courseTitle}>
            Python Course
          </Text>
          <Text style={styles.courseSubtitle}>
            Advanced Python Course
          </Text>
          <View style={styles.starContainer}>
            <StarIcon style={styles.starIcon} />
            <Text style={styles.courseDetails}>
              $59 • 4.2 (1233 reviews) • 18 lessons
            </Text>
          </View>
        </View>
        <Text style={styles.bestSeller}>Best-seller</Text>
      </View>
    </View>
  );
};

export default PopularCourses;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
  },
  header: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  viewMore: {
    color: '#0000FF',
    fontSize: 14,
    marginBottom: 20,
  },
  courseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  courseImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 50,
  },
  courseText: {
    flexDirection: 'column',
    flex: 1,
  },
  courseTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseSubtitle: {
    color: 'gray',
    marginBottom: 5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    color: 'gold',
    fontSize: 16,
    marginRight: 5,
  },
  courseDetails: {
    color: 'gray',
    marginBottom: 5,
  },
  bestSeller: {
    backgroundColor: '#0000FF',
    color: '#FFFFFF',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    top: 10,
    left: 10,
  },
});
