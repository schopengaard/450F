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
  Dimensions,
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import NavDrawer from '../components/NavDrawer'
import Search from '../components/Search'
import { PieChart } from 'react-native-svg-charts'
import Constants from 'expo-constants'
import styles from '../components/Style.js'
import { Col, Row, Grid } from 'react-native-easy-grid'
import BookInfo from '../components/BookInfo'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const HomePage = () => {
  let result = []

  BookInfo.data.forEach((elem) => {
    var r = Math.floor(Math.random() * 150) + 100
    var g = Math.floor(Math.random() * 50) + 50
    var b = Math.floor(Math.random() * 50) + 50
    if (result.length == 0) {
      result.push({
        key: elem.genre,
        amount: 0,
        svg: { fill: 'rgb(' + r + ',' + g + ',' + b + ', 0.5)' },
        arc: { cornerRadius: 3 },
      })
    } else {
      var check = false
      for (var i = 0; i < result.length; i++) {
        if (elem.genre == result[i]['key']) {
          check = true
        }
      }
      if (check != true) {
        result.push({
          key: elem.genre,
          amount: 0,
          svg: { fill: 'rgb(' + r + ',' + g + ',' + b + ', 0.5)' },
          arc: { cornerRadius: 3 },
        })
      }
    }

    for (var l = 0; l < result.length; l++) {
      if (elem.genre == result[l]['key']) {
        result[l]['amount'] += 1
      }
    }
  })

  const favourite = (x) => {
    if (BookInfo.data[x]['fav'] == 0) {
      BookInfo.data[x].push = 1
    } else if (BookInfo.data[x]['fav'] == 1) {
      BookInfo.data[x].push = 0
    }
  }

  //alert(JSON.stringify(result));

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
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#333',
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
            var icon = require('../assets/img/fav0.png')
            if (data.fav == 1) {
              icon = require('../assets/img/fav1.png')
              return (
                <View
                  key={data.key}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    margin: 10,
                    marginBottom: 5,
                  }}
                >
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
                      flexGrow: 1,
                      marginTop: 10,
                      padding: 10,
                      paddingLeft: 0,
                    }}
                  >
                    <Text
                      style={{
                        width: windowWidth * 0.4,
                        fontSize: 18,
                        flexWrap: 'wrap',
                      }}
                    >
                      {data.title}
                    </Text>
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
                  <TouchableOpacity onPress={() => favourite(data.key)}>
                    <Image
                      source={icon}
                      style={{
                        height: 24,
                        width: 24,
                        margin: 20,
                        marginTop: 50,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              )
            }
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage
