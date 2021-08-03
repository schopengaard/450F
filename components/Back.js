import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import backIcon from '../assets/img/backIcon.png'
import { NavigationContainer, useNavigation, DrawerActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Search = () => {
	const navigation = useNavigation();
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={backIcon}
          style={{
            width: 25,
            height: 25,
            marginRight: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Search
