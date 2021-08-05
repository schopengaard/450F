import 'react-native-gesture-handler';

import * as React from 'react';
import { Image, Button, View, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as FileSystem from 'expo-file-system';

import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from './pages/HomePage.js';
import SearchPage from './pages/SearchPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import styles from './components/Style.js';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import logoIcon from './assets/img/logo.png';
import searchIcon from './assets/img/searchIcon.png';

export default function App() {
  const [loaded] = useFonts({
    RobotoMono: require('./assets/fonts/RobotoMono-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  const Auth = ({ navigation }) => {
    return (
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const Home = ({ navigation }) => {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen
          name="HomePage"
          component={HomePage}
          options={{ drawerLabel: 'Home' }}
        />
        <Drawer.Screen
          name="SearchPage"
          component={SearchPage}
          options={{ drawerLabel: 'Search' }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
