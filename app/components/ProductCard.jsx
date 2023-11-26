import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants/theme';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishList } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();

  const wishLists = useSelector((state) => state.wishLists);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const addToWishListHandler = () => {
    dispatch(toggleWishList(product));
  };

  useEffect(() => {
    const found = wishLists.find((item) => item.product.id === product.id);
    if (found) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [wishLists, isFavorite]);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetailsScreen', { product })}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: product.thumbnail,
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {product.title}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.discount}>
              {Math.round(product.discountPercentage)}% off
            </Text>
            <Text style={styles.discountPrice}>{product.price}</Text>
            <Text style={styles.price}>
              $
              {product.price -
                Math.round((product.price * product.discountPercentage) / 100)}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={addToWishListHandler}
        >
          {isFavorite ? (
            <AntDesign name="heart" size={24} color={COLORS.tertiary} />
          ) : (
            <AntDesign name="hearto" size={24} color={COLORS.gray2} />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteIcon: {
    position: 'absolute',
    top: SIZES.xSmall,
    right: SIZES.xSmall,
  },
  container: {
    width: 170,
    height: 200,
    marginEnd: SIZES.small,
    borderRadius: SIZES.xxSmall,
    backgroundColor: COLORS.lightWhite,
    marginBottom: SIZES.small,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  details: {
    padding: SIZES.xxSmall,
    marginHorizontal: SIZES.xxSmall,
  },
  img: {
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  imgContainer: {
    flex: 1,
    width: 170,
    borderTopLeftRadius: SIZES.xxSmall,
    borderTopRightRadius: SIZES.xxSmall,
    overflow: 'hidden',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  title: {
    fontSize: SIZES.medium,
    marginBottom: 2,
  },
});

export default ProductCard;
