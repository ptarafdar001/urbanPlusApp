import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({ category }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('SearchScreen', {
          searchKey: '',
          category: category.name,
        })
      }
    >
      <View>
        <View style={styles.cardContainer}>
          <Image source={{ uri: category.img }} style={styles.thumbnail} />
        </View>
        <Text style={styles.categoryName}>{category.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: COLORS.lightSky2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: SIZES.medium,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  categoryName: {
    alignSelf: 'center',
  },
});

export default CategoryCard;
