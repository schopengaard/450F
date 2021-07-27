import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import { openDatabase } from 'expo-sqlite';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import HomePage from './pages/HomePage.js';
import styles from './components/Style.js';

const Stack = createStackNavigator();

var db = openDatabase({ name: 'UserDatabase.db' });

export default function App() {
  const [loaded] = useFonts({
    RobotoMono: require('./assets/fonts/RobotoMono-Regular.ttf'),
  });

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS user');
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS user (username VARCHAR(20) PRIMARY KEY, fullname VARCHAR(20),password VARCHAR(20))'
            );
          }
        }
      );
    });
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'Login Page',
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
          name="HomePage"
          component={HomePage}
          options={{
            title: 'Home Page',
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
  );
}
