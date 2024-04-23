import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Title, Caption } from 'react-native-paper';

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Title style={styles.header}>
          Categories
        </Title>
        <Caption style={styles.viewMore}>
          View more
        </Caption>
      </View>

      <View style={styles.categoryRow}>
        <View style={styles.categoryColumn}>
          <View style={styles.categoryItem}>
            <Image source={require('../img/Business.png')} style={styles.image} />
            <Text style={styles.categoryText}>Business</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../img/Code.png')} style={styles.image} />
            <Text style={styles.categoryText}>Code</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../img/Movie.png')} style={styles.image} />
            <Text style={styles.categoryText}>Movie</Text>
          </View>
        </View>

        <View style={styles.categoryColumn}>
          <View style={styles.categoryItem}>
            <Image source={require('../img/Design.png')} style={styles.image} />
            <Text style={styles.categoryText}>Design</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../img/Writing.png')} style={styles.image} />
            <Text style={styles.categoryText}>Writing</Text>
          </View>
          <View style={styles.categoryItem}>
            <Image source={require('../img/Language.png')} style={styles.image} />
            <Text style={styles.categoryText}>Language</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontWeight: 'bold',
    marginRight: 100,
  },
  viewMore: {
    color: '#0000FF',
    fontSize: 14,
    marginLeft: 1,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  categoryColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  categoryItem: {
    flexDirection: 'row', // Sắp xếp theo hàng ngang
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center', // Canh lề giữa
    paddingHorizontal: 10, // Khoảng cách bên trái và bên phải của item
    width: 320, // Độ rộng của item
  },
  image: {
    width: 50, // Độ rộng của hình ảnh
    height: 50, // Độ cao của hình ảnh
    borderRadius: 25, // Độ bo tròn của hình ảnh
    marginRight: 10, // Khoảng cách giữa hình ảnh và text
  },
  categoryText: {
    flex: 1, // Chia đều không gian còn lại cho text
    textAlign: 'right', // Canh lề phải cho text
  },
});
