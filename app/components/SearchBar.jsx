import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants/theme';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  // Search key
  const [searchKey, setSearchKey] = useState('');

  // search method
  const handleSearchOnSubmit = () => {
    navigation.navigate('SearchScreen', { searchKey, category: '' });
  };

  return (
    <View style={styles.searchConatiner}>
      <TouchableOpacity>
        <AntDesign
          name="search1"
          size={SIZES.xLarge}
          color={COLORS.primary}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder="Search"
          onSubmitEditing={handleSearchOnSubmit}
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: SIZES.small,
    backgroundColor: COLORS.gray3,
    borderRadius: SIZES.xSmall,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginVertical: SIZES.medium,
    height: 50,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.gray,
  },
  searchInput: {
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  searchWrapper: {
    flex: 1,
    // backgroundColor: COLORS.gray2,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
});
