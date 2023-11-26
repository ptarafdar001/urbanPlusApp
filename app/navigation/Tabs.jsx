import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CategoriesScreen from '../screens/CategoriesScreen';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SIZES, COLORS } from '../constants/theme';
import WishlistScreen from '../screens/WishlistScreen';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Entypo
                name={'home'}
                size={SIZES.xLarge}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Categorie"
        component={CategoriesScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name={'appstore1'}
                size={SIZES.xLarge}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="heart"
                size={SIZES.xLarge}
                color={focused ? COLORS.primary : COLORS.gray2}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                {carts.length > 0 && (
                  <Text style={styles.cartItemIcon}>{carts.length}</Text>
                )}
                <Ionicons
                  name={'cart-sharp'}
                  size={SIZES.xLarge}
                  color={focused ? COLORS.primary : COLORS.gray2}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  cartItemIcon: {
    position: 'absolute',
    backgroundColor: 'red',
    top: -10,
    right: -5,
    width: 20,
    borderRadius: 50,
    color: 'white',
    textAlign: 'center',
    zIndex: 100,
  },
});

export default Tabs;
