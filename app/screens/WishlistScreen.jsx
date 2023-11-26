import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { SIZES } from '../constants/theme';
import SearchItemCard from '../components/SearchItemCard';

const WishlistScreen = () => {
  const wishLists = useSelector((state) => state.wishLists);
  return (
    <View style={styles.wishListContainer}>
      <Text style={styles.wishListHeader}>My Wishlist</Text>
      <FlatList
        data={wishLists}
        numColumns={1}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SearchItemCard product={item.product} />}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wishListContainer: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: SIZES.small,
  },
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxSmall,
    paddingLeft: SIZES.xxSmall,
  },
  wishListHeader: {
    fontSize: SIZES.large,
  },
});

export default WishlistScreen;
