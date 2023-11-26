import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import ProductQuantity from './ProductQuanty';
import { useNavigation } from '@react-navigation/native';
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { decriment, incriment, removeFromCart } from '../redux/cartSlice';

const CartItemCard = ({ item }) => {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const product = item.product;
  const dispatch = useDispatch();

  const removeCartHandler = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    dispatch(incriment(item.id));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(decriment(item.id));
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('ProductDetailsScreen', { product })}
    >
      <Image source={{ uri: item.product.thumbnail }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.title}>{item.product.title}</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.discount}>
            {Math.round(item.product.discountPercentage)}% off
          </Text>
          <Text style={styles.discountPrice}> {item.product.price} </Text>
          <Text style={styles.price}>
            $
            {item.product.price -
              Math.round(
                (item.product.price * item.product.discountPercentage) / 100
              )}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <ProductQuantity
            quantity={quantity}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <TouchableOpacity style={styles.cartBtn} onPress={removeCartHandler}>
            <EvilIcons name="trash" size={24} color="red" />
          </TouchableOpacity>
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
  cartBtn: {
    width: '35%',
    padding: SIZES.xSmall,
    borderRadius: SIZES.xxSmall,
    marginLeft: SIZES.xxLarge + 20,
    alignItems: 'flex-end',
  },
  cartBtnTxt: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CartItemCard;
