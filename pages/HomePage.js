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
import { PieChart } from 'react-native-svg-charts'
import Constants from 'expo-constants'
import styles from '../components/Style.js'
import { Col, Row, Grid } from 'react-native-easy-grid'
import BookInfo from '../components/BookInfo'

const HomePage = () => {
  let result = [
    {
      key: 'Historical Fiction',
      amount: 0,
      svg: { fill: '#0c62ed' },
      arc: { cornerRadius: 3 },
    },
    {
      key: 'Horror Fiction',
      amount: 0,
      svg: { fill: '#0c6e5f' },
      arc: { cornerRadius: 3 },
    },
    {
      key: 'Non-fiction',
      amount: 0,
      svg: { fill: '#ed0c6e' },
      arc: { cornerRadius: 3 },
    },
  ]

  BookInfo.data.forEach((elem) => {
    switch (elem.genre) {
      case 'Historical Fiction':
        result[0]['amount'] += 1
        break
      case 'Horror Fiction':
        result[1]['amount'] += 1
        break
      case 'Non-fiction':
        result[2]['amount'] += 1
        break
    }
  })

  //alert(JSON.stringify(result))

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
        <Grid style={styles.grid}>
          <Col>
            <PieChart
              width={100}
              height={100}
              valueAccessor={({ item }) => item.amount}
              data={result}
              spacing={0}
              outerRadius={'95%'}
              style={{ height: 100 }}
            ></PieChart>
          </Col>
          <Col>
            {result.map((data, key) => {
              return (
                <View
                  key={data.key}
                  style={{ flex: 1, justifyContent: 'center' }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#555',
                    }}
                  >
                    {data.amount + ' ' + data.key}
                  </Text>
                </View>
              )
            })}
            <Text style={styles.col}></Text>
          </Col>
        </Grid>

        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          {BookInfo.data.map((data, key) => {
            return (
              <View key={data.key} style={{ flexDirection: 'row' }}>
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
                    paddingLeft: 0,
                  }}
                >
                  <Text style={{ fontSize: 18 }}>{data.title}</Text>
                  <Text>{'by ' + data.author}</Text>
                  <Text
                    style={{
                      fontStyle: 'italic',
                      fontSize: 12,
                      color: '#aaa',
                    }}
                  >
                    {'' + data.genre}
                  </Text>
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
