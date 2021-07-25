import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const left = (navigation) => {
  const toggleDrawer = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={{ alignContent: 'left' }}
        onPress={() => toggleDrawer()}>
        <Image
          source={require('../assets/logo/favicon16.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const openPage = (nav) => {
  nav.navigate('searchScreen');
};

const right = (navigation) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={{ alignContent: 'left' }}
        onPress={() => openPage(navigation)}>
        <Image
          source={require('../assets/logo/favicon16.png')}
          style={{
            width: 25,
            height: 25,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const homeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator intialRouteName="homeScreen">
      <Stack.Screen
        name="homeScreen"
        component={homeScreen}
        options={{
          title: '',
          headerLeft: () => left(navigation),
          headerRight: () => right(navigation),
        }}
      />
    </Stack.Navigator>
  );
};

const searchScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator intialRouteName="searchScreen">
      <Stack.Screen
        name="searchScreen"
        component={searchScreen}
        options={{
          title: '',
          headerLeft: () => left(navigation),
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="homeScreen"
        component={homeScreenStack}
        options={{ drawerLabel: 'Home' }}
      />
      <Drawer.Screen
        name="searchScreen"
        component={searchScreenStack}
        options={{ drawerLabel: 'Search' }}
      />
    </Drawer.Navigator>
  );
};

const homeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello</Text>
    </View>
  );
};

const searchScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>World</Text>
    </View>
  );
};

export default App;
