import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Component } from 'react';
import { AsyncStorage } from 'react-native';
import HomePage from './src/HomePage';
import RecepieView from './src/RecepieView';


const Stack = createStackNavigator();

export default class App extends Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName ="Home">
          <Stack.Screen name ="Home" component= {HomePage}/>
          <Stack.Screen name ="Recepie" component= {RecepieView}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
