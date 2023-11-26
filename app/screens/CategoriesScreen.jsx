import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SIZES, COLORS } from '../constants/theme';
import CategoryCard from '../components/CategoryCard'; // Import your CircularCategoryCard component
import { categories } from '../constants/category';

const CategorysScreen = () => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.categoryHeader}>All Categories</Text>
      <View style={styles.backGroundContainer}>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <CategoryCard category={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 35,
    marginBottom: 60,
  },
  categoryHeader: {
    fontSize: SIZES.large,
    marginBottom: SIZES.xxSmall,
  },
  backGroundContainer: {
    backgroundColor: COLORS.lightSky2,
  },
});

export default CategorysScreen;
