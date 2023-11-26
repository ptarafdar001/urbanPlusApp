import React from 'react';
import { StyleSheet, FlatList, View, ActivityIndicator } from 'react-native';
import useFetch from '../hooks/useFetch';
import { COLORS, SIZES } from '../constants/theme';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { data, loading } = useFetch();
  const products = data;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxSmall,
    paddingLeft: SIZES.xxSmall,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default ProductList;
