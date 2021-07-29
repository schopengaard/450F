import 'react-native-gesture-handler'

import * as React from 'react'
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import logoIcon from '../assets/img/logo.png'
import searchIcon from '../assets/img/searchIcon.png'

const SearchPage = () => {
  return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Search</Text>
    </View>
  )
}

export default SearchPage
