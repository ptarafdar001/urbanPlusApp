import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SIZES, COLORS } from '../constants/theme';
import CartItem from '../components/CartItemCard';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const carts = useSelector((state) => state.carts);

  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    let itemPrice = 0;
    let itemDiscount = 0;
    carts.forEach((element) => {
      itemPrice += element.product.price * element.count;
      itemDiscount +=
        ((element.product.price * element.product.discountPercentage) / 100) *
        element.count;
    });

    setPrice(itemPrice);
    setDiscount(itemDiscount.toFixed(2));
    setAmount((itemPrice - itemDiscount).toFixed(2));
  }, [carts]);

  const shopNowBtnHandler = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.cartContainer}>
      <Text style={styles.cartHeader}>My Cart</Text>

      {carts.length > 0 ? (
        <>
          <ScrollView>
            <FlatList
              data={carts}
              numColumns={1}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <CartItem item={item} />}
              contentContainerStyle={styles.container}
              showsVerticalScrollIndicator={false}
            />

            <View style={styles.detailsContainer}>
              <Text style={styles.priceHeader}>Price Details</Text>
              <View style={styles.priceContainer}>
                <Text>Price ({carts.length} items)</Text>
                <Text>${price}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text>Discount</Text>
                <Text style={styles.greenText}>- ${discount}</Text>
              </View>

              <View style={styles.priceContainer}>
                <Text>Delivery Charges</Text>

                <Text style={styles.greenText}>
                  <Text style={styles.grayText}>$20</Text> Free Delivery
                </Text>
              </View>

              <View style={styles.dotedLine} />

              <View style={styles.priceContainer}>
                <Text style={styles.totalAmount}>Total Amount</Text>
                <Text style={styles.totalAmount}>${amount}</Text>
              </View>

              <View style={styles.solidLine} />

              <Text style={[styles.greenText, { fontWeight: 'bold' }]}>
                You will save ${discount} on this order
              </Text>
            </View>
          </ScrollView>
          <View style={styles.placeOrder}>
            <View>
              <Text style={styles.grayText}>${price}</Text>
              <Text style={styles.totalAmount}>${amount}</Text>
            </View>
            <TouchableOpacity style={[styles.cartBtn, styles.buyNowBtn]}>
              <Text style={styles.cartBtnTxt}>Place order</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty!</Text>
          <TouchableOpacity
            style={[styles.cartBtn, styles.ShopNowBtn]}
            onPress={shopNowBtnHandler}
          >
            <Text style={styles.cartBtnTxt}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CartScreen;

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
    flex: 1,
    marginTop: 50,
    marginHorizontal: SIZES.small,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.xSmall,
    marginVertical: SIZES.xxSmall - 2,
  },

  detailsContainer: {
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.xxSmall,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray3,
  },
  priceHeader: {
    fontSize: SIZES.medium + 2,
    fontWeight: 'bold',
    marginVertical: SIZES.xxSmall,
  },
  greenText: {
    color: COLORS.darkGreen,
  },
  grayText: {
    color: COLORS.gray2,
    textDecorationLine: 'line-through',
  },
  totalAmount: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  },
  dotedLine: {
    borderTopWidth: 1,
    borderColor: COLORS.gray2,
    marginHorizontal: SIZES.xSmall,
    borderStyle: 'dashed',
  },
  solidLine: {
    borderTopWidth: 1,
    borderColor: COLORS.gray3,
    marginVertical: 2,
  },
  placeOrder: {
    backgroundColor: COLORS.lightWhite,
    padding: SIZES.small,
    borderRadius: SIZES.xxSmall,
    borderWidth: 1,
    borderColor: COLORS.gray3,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  emptyCart: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 100,
  },
  emptyCartText: {
    fontSize: SIZES.medium + 2,
    fontWeight: 'bold',
  },
  ShopNowBtn: {
    marginTop: SIZES.medium,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGreen,
  },
});
