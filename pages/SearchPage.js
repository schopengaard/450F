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
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import NavDrawer from '../components/NavDrawer'
import Back from '../components/Back'
import styles from '../components/Style.js'
import { Col, Row, Grid } from 'react-native-easy-grid'
import BookInfo from '../components/BookInfo'

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
              styles.button2,
              { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
            ]}
          >
            <Text style={[styles.buttonText, styles.button2Text]}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          {searchResult.map((data, key) => {
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

export default SearchPage
