import React, { useState } from 'react'
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import NavDrawer from '../components/NavDrawer'
import Search from '../components/Search'
import Constants from 'expo-constants'
import styles from '../components/Style.js'
import { Col, Row, Grid } from 'react-native-easy-grid'
import BookInfo from '../components/BookInfo'

const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBarBackground />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 50,
          backgroundColor: '#212121',
        }}
      >
        <NavDrawer />
        <Text style={{ color: 'white', fontSize: 18 }}>450F</Text>
        <Search />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={{ padding: 20, fontFamily: 'RobotoMono', fontSize: 20 }}>
          YOUR FAVOURITES:
        </Text>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          {BookInfo.data.map((data, index) => {
            return (
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={data.image}
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    margin: 10,
                  }}
                />
                <View
                  style={{
                    flexShrink: 1,
                    marginTop: 10,
                    padding: 10,
										paddingLeft: 0
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{data.title}</Text>
                  <Text>{'by ' + data.author}</Text>
									<Text style={{fontStyle: 'italic', fontSize: 12, color: '#aaa'}}>{'' + data.genre}</Text>
                </View>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage
