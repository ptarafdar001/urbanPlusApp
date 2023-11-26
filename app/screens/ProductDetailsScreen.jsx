import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';
import Carousel from '../components/Carousel';
import SearchBar from '../components/SearchBar';
import { addToCart, toggleWishList } from '../redux/cartSlice';

const ProductDetailsScreen = ({ navigation }) => {
  const route = useRoute();
  const { product } = route.params;
  const wishLists = useSelector((state) => state.wishLists);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const addToWishListHandler = () => {
    dispatch(toggleWishList(product));
  };

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    navigation.navigate('Cart');
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
    <SafeAreaView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={35} color="black" />
        </TouchableOpacity>
        <View style={styles.searchContainer}>
          <SearchBar />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >
          <Ionicons name="cart-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.imgContainer}>
        <Carousel slides={product.images} CarouselHeight={500} />
        <View style={styles.shareIconContainer}>
          <TouchableOpacity onPress={addToWishListHandler}>
            {isFavorite ? (
              <AntDesign name="heart" size={24} color={COLORS.tertiary} />
            ) : (
              <AntDesign name="hearto" size={24} color={COLORS.gray2} />
            )}
          </TouchableOpacity>

          <MaterialCommunityIcons
            name="share-outline"
            size={35}
            color={COLORS.gray2}
          />
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.title}>{product.description}</Text>

        <View style={styles.priceOffContainer}>
          <Text style={styles.priceOff}>
            Extra $
            {Math.round((product.price * product.discountPercentage) / 100)} off
          </Text>
        </View>

        <View style={styles.percentageOffContainer}>
          <Text style={styles.sellingPrice}>
            $
            {product.price -
              Math.round((product.price * product.discountPercentage) / 100)}
          </Text>
          <Text style={styles.price}>{product.price}</Text>
          <Text style={styles.percentageOff}>
            {Math.round(product.discountPercentage)}% off
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.cartBtn} onPress={addToCartHandler}>
            <Text style={styles.cartBtnTxt}>Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.cartBtn, styles.buyNowBtn]}>
            <Text style={styles.cartBtnTxt}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    marginTop: 115,
  },
  searchContainer: {
    width: '80%',
  },
  shareIconContainer: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  addCartBtn: {
    width: 37,
    height: 37,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBtn: {
    width: '45%',
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.xSmall,
    borderRadius: SIZES.xxSmall,
    borderColor: COLORS.gray2,
    borderWidth: 1,
  },
  cartBtnTxt: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buyNowBtn: {
    backgroundColor: COLORS.darkYolow,
    borderWidth: 0,
  },
  btnContainer: {
    marginTop: SIZES.small,
    marginHorizontal: SIZES.xxSmall,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  description: {
    backgroundColor: COLORS.lightWhite,
    width: '100%',
    marginHorizontal: 12,
  },
  desc: {
    fontSize: SIZES.large,
  },
  descWrapper: {
    marginTop: SIZES.large,
    marginHorizontal: SIZES.large,
  },
  descTxt: {
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small,
  },
  img: {
    aspectRatio: 4 / 3,
    resizeMode: 'cover',
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: SIZES.small,
  },
  priceOff: {
    fontSize: SIZES.small,
    textAlign: 'center',
    color: COLORS.darkGreen,
  },
  priceOffContainer: {
    backgroundColor: COLORS.lightGreen2,
    width: '25%',
    borderRadius: SIZES.xxSmall,
    marginVertical: SIZES.xSmall,
    paddingVertical: SIZES.xxSmall / 2,
  },
  price: {
    fontSize: SIZES.medium - 2,
    color: COLORS.gray2,
    textDecorationLine: 'line-through',
    marginRight: SIZES.small,
  },
  sellingPrice: {
    paddingHorizontal: 6,
    fontSize: SIZES.large,
    marginRight: SIZES.small,
  },
  percentageOffContainer: {
    flexDirection: 'row',
    marginLeft: SIZES.small,
    alignItems: 'center',
  },
  percentageOff: {
    color: COLORS.lightGreen,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  rationRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 5,
    width: '95%',
  },
  ratingTxt: {
    color: COLORS.gray,
    paddingHorizontal: SIZES.xSmall,
  },
  title: {
    fontSize: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 20,
    width: '90%',
  },
  upperRow: {
    marginHorizontal: 20,
    marginTop: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.small,
    zIndex: 999,
    width: '90%',
  },
});

export default ProductDetailsScreen;
