import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { SIZES } from '../constants/theme';
import { useRoute } from '@react-navigation/native';
import SearchItemCard from '../components/SearchItemCard';
import useFetchSearch from '../hooks/useFetchSearch';
import useFetchCategory from '../hooks/useFetchCategory';

const SearchScreen = ({ navigation }) => {
  const route = useRoute();
  const { searchKey, category } = route.params;

  let product = [];
  if (category === '') {
    const { data } = useFetchSearch(searchKey);
    product = data;
  } else {
    const { data } = useFetchCategory(category);
    product = data;
  }

  return (
    <View style={styles.cartContainer}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={35} color="black" />
        </TouchableOpacity>
        <Text style={styles.SearchText}>
          {searchKey ? searchKey : category}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >
          <Ionicons name="cart-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>
      {product.length > 0 && (
        <FlatList
          data={product}
          numColumns={1}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <SearchItemCard product={item} />}
          contentContainerStyle={styles.container}
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  cartHeader: {
    fontSize: SIZES.large,
  },
  container: {
    alignItems: 'center',
    paddingTop: SIZES.xxSmall,
    paddingLeft: SIZES.xxSmall,
  },
  cartContainer: {
    marginHorizontal: SIZES.small,
  },
  upperRow: {
    marginHorizontal: 20,
    marginBottom: SIZES.small,
    marginTop: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: SIZES.small,
    width: '90%',
  },
  searchContainer: {
    width: '80%',
  },
  SearchText: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
});
