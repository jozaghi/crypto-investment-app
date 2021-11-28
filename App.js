import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PriceChart from './components/PriceChart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store/config';
import CoinListPage from './pages/CoinListPage';
import LivePricePage from './pages/LivePricePage';

const Stack = createNativeStackNavigator();

export default function App() {
  /*
  
  */
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Coin List" component={CoinListPage} />
          <Stack.Screen name="Live Feed" component={LivePricePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
