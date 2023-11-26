import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailsScreen from './app/screens/ProductDetailsScreen';
import WishlistScreen from './app/screens/WishlistScreen';

import Toast from 'react-native-toast-message';
import Tabs from './app/navigation/Tabs';
import SearchScreen from './app/screens/SearchScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom Navigation"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetailsScreen"
            component={ProductDetailsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WishlistScreen"
            component={WishlistScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
