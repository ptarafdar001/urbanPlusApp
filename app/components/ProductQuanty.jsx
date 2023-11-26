import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const ProductQuantity = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <View style={styles.quantityContainer}>
      <TouchableOpacity onPress={onDecrement} style={styles.button}>
        <EvilIcons name="minus" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity onPress={onIncrement} style={styles.button}>
        <EvilIcons name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 3,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default ProductQuantity;
