import 'react-native-gesture-handler'

import * as React from 'react'
import { Button, View, Text } from 'react-native'
import { useFonts } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainPage from './pages/MainPage.js'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.js'
import styles from './components/Style.js'

const Stack = createStackNavigator()

export default function App() {
  const [loaded] = useFonts({
    RobotoMono: require('./assets/fonts/RobotoMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{
            title: 'Main Page',
            headerStyle: {
              backgroundColor: '#00000000',
            },
            headerTintColor: '#00000000',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{
            title: 'Register Page',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'Login Page',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
