import React, { useState } from 'react'
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import NavDrawer from '../components/NavDrawer'
import Back from '../components/Back'
import styles from '../components/Style.js'
import { Col, Row, Grid } from 'react-native-easy-grid'
import BookInfo from '../components/BookInfo'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

const SearchPage = () => {
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const searchResult = BookInfo.data.filter(
    (x) =>
      x.title.toLowerCase().includes(book.toLowerCase()) ||
      x.author.toLowerCase().includes(book.toLowerCase()) ||
      x.genre.toLowerCase().includes(book.toLowerCase()),
  )
  console.log(searchResult)

  const favourite = (x) => {
    if (BookInfo.data[x]['fav'] == 0) {
      BookInfo.data[x]['fav'] = 1
    } else if (BookInfo.data[x]['fav'] == 1) {
      BookInfo.data[x]['fav'] = 0
    }
  }
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
        <Back />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={{ padding: 20, fontFamily: 'RobotoMono', fontSize: 20 }}>
          SEARCH:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 5,
            justifyContent: 'center',
          }}
        >
          <TextInput
            style={[styles.input, styles.searchInput]}
            placeholder="search"
            value={book}
            onChangeText={(value) => setBook(value)}
          />
          <TouchableOpacity
            style={[
              styles.button,
              {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderColor: '#fff',
                backgroundColor: '#fff',
              },
            ]}
          >
            <Text
              style={[styles.buttonText, styles.button2Text, { color: '#000' }]}
            >
              SEARCH
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          {searchResult.map((data, key) => {
            var icon = require('../assets/img/fav0.png')
            if (data.fav == 0) {
              icon = require('../assets/img/fav0.png')
            } else {
              icon = require('../assets/img/fav1.png')
            }
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
                    style={{ height: 24, width: 24, margin: 20, marginTop: 50 }}
                  />
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default SearchPage
