import 'react-native-gesture-handler'

import * as React from 'react'
import { Image, Button, View, Text, TouchableOpacity } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import HomePage from './pages/HomePage.js'
import SearchPage from './pages/SearchPage.js'
import LoginPage from './pages/LoginPage.js'
import RegisterPage from './pages/RegisterPage.js'
import styles from './components/Style.js'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

import logoIcon from './assets/img/logo.png'
import searchIcon from './assets/img/searchIcon.png'

export default function App() {
  const [loaded] = useFonts({
    RobotoMono: require('./assets/fonts/RobotoMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  const homeStack = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchPage"
          component={SearchPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

  const accessStack = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'LOGIN',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{
            title: 'REGISTER',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="LoginPage"
          options={{ drawerLabel: 'Login' }}
          component={accessStack}
        />
        <Drawer.Screen
          name="RegisterPage"
          options={{ drawerLabel: 'Register' }}
          component={accessStack}
        />
        <Drawer.Screen
          name="HomePage"
          options={{ drawerLabel: 'Home' }}
          component={homeStack}
        />
        <Drawer.Screen
          name="SearchPage"
          options={{ drawerLabel: 'Search' }}
          component={homeStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
