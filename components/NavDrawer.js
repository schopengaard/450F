import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import logoIcon from '../assets/img/logo.png'
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const NavDrawer = (props) => {
	const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Image
          source={logoIcon}
          style={{
            width: 25,
            height: 25,
            marginLeft: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default NavDrawer
