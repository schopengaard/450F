import 'react-native-gesture-handler';

import React, { useState } from 'react';
import {
  Image,
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import styles from '../components/Style';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomePage = ({ navigation }) => {
  return (
    <View>
    </View>
  )
}

export default HomePage;
