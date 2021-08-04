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
import axios from 'axios'

const SearchPage = () => {
  const [book, setBook] = useState('')
  const [result, setResult] = useState([])
  const [apiKey, setApiKey] = useState(
    'AIzaSyBDEEvTwL5QJsGxgZYQQyyDz8qjRr4-24s',
  )

  const handleSearch = () => {
    axios
      .get(
        'https://www.googleapis.com/books/v1/volumes?q=' +
          book +
          '&key=' +
          apiKey +
          '&maxResults=5',
      )
      .then((data) => {
        setResult(data.data.items)
      })
  }

  const list = () => {
    return result.map((book) => {
      return <Image source={{ uri: book.volumeInfo.imageLinks.thumbnail }} />
    })
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
              styles.button2,
              { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
            ]}
            onPress={handleSearch}
          >
            <Text style={[styles.buttonText, styles.button2Text]}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <View>{list()}</View>
      </ScrollView>
    </View>
  )
}

export default SearchPage
