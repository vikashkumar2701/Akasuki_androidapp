/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginPage from './components/loginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Destination from './components/destination';
import FinalDelivery from './components/finalDelivery';
import Dashboard from './components/dashboard';
import AddContacts from './components/addContacts';
import SosPlanning from './components/sosPlanning';
import NearbySOS from './components/nearbySOS';


const App: () => Node = () => {
  //hide status bar
  StatusBar.setHidden(true, 'none');
  const Stack = createNativeStackNavigator();
  return (
    <>
    
    <NavigationContainer>
 
  <Stack.Navigator>
       <Stack.Screen options={{headerShown: false}}  name="Home" component={LoginPage} />
       <Stack.Screen options={{headerShown: false}}  name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{headerShown: false}}  name="Capability" component={Destination} />
        <Stack.Screen options={{headerShown: false}}  name="FinalDelivery" component={FinalDelivery} />
        <Stack.Screen options={{headerShown: false}}  name="AddContacts" component={AddContacts} />
        <Stack.Screen  options={{headerShown: false}}  name="SosPlanning" component={SosPlanning} />
        <Stack.Screen  options={{headerShown: false}}  name="NearbySOS" component={NearbySOS} />
     </Stack.Navigator>
  </NavigationContainer>
  </>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
