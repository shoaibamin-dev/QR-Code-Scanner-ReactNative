
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HomeScreen from './screens/HomeScreen'
import Welcome from './screens/Welcome'
import InformationScreen from './screens/InformationScreen'
import QRScreen from './screens/QRScreen'


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QRScreen" component={QRScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});

export default AppStack;