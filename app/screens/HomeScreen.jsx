import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants/theme';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import ProductList from '../components/ProductList';

const HomeScreen = () => {
  const defaultSlides = [
    'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  ];
  return (
    <View style={styles.rootContainer}>
      <View style={styles.logoContainer}>
        <Text style={styles.brandName}>UrbanPlus</Text>
        <SearchBar />
      </View>
      <ScrollView style={styles.backGroundContainer}>
        <Carousel slides={defaultSlides} />
        <View style={styles.ProductListNamePosition}>
          <Text style={styles.ProductListName}>Recommended for you</Text>
        </View>
        <ProductList />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 30,
  },
  logoContainer: {
    marginHorizontal: 12,
    marginVertical: 5,
  },
  brandName: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
  },
  ProductListName: {
    fontSize: SIZES.large,
  },
  ProductListNamePosition: {
    marginHorizontal: SIZES.small,
    marginTop: SIZES.xSmall,
  },
  backGroundContainer: {
    backgroundColor: COLORS.lightSky2,
  },
});
