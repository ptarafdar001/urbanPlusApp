import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const SearchItemCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product })}
    >
      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text numberOfLines={2}>{product.description} </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.discount}>
            {Math.round(product.discountPercentage)}% off
          </Text>
          <Text style={styles.discountPrice}> {product.price} </Text>
          <Text style={styles.price}>
            $
            {product.price -
              Math.round((product.price * product.discountPercentage) / 100)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.lightWhite,
    borderRadius: SIZES.xxSmall,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 4,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  quantity: {
    fontSize: 14,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 5,
  },
  price: {
    fontWeight: 'bold',
    fontSize: SIZES.medium - 2,
  },
  discount: {
    fontSize: SIZES.medium - 2,
    color: COLORS.lightGreen,
  },
  discountPrice: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray2,
    textDecorationLine: 'line-through',
    marginRight: SIZES.small,
  },
});

export default SearchItemCard;
