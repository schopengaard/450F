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
          YOUR READING INSIGHTS:
        </Text>
      </ScrollView>
    </View>
  )
}

export default HomePage
