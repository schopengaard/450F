import React, { useState, useRef, useEffect } from 'react'
import {
  Animated,
  Image,
  Button,
  View,
  Text,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native'
import StatusBarBackground from '../components/StatusBarBackground'
import logoTall from '../assets/img/logoTall.png'
import styles from '../components/Style'
import { openDatabase } from 'expo-sqlite'

var db = openDatabase({ name: 'UserDatabase.db' })

const LoginPage = ({ navigation }) => {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const fadeAnim = useRef(new Animated.Value(1)).current

  const verfication = (navigation) => {
    /*
		db.transaction((tx) => {
      tx.executeSql(
        'SELECT count(username) FROM user where username=? and password=?',
        [Username, Password],
        (tx, results) => {
          //alert(results.rows[0]['count(username)'])
          if (results.rows[0]['count(username)'] == 1) {
            navigation.navigate('HomePage')
          } else {
            alert('Invalid username or password')
          }

          //alert(typeof(results.rows[0]))
          //alert(results.rows.length)
        },
      )
    })
		*/
    navigation.navigate('HomePage')
  }

  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true)
        keyboardEvent('up')
      },
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false)
        keyboardEvent('down')
      },
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  const keyboardEvent = (e) => {
    if (e == 'up') {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start()
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start()
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.changedContainer}
    >
      <StatusBarBackground />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <Animated.View style={[styles.topContainer, { opacity: fadeAnim }]}>
            <View style={styles.logoContainer}>
              <Image source={logoTall} style={styles.logo} />
              <Text style={styles.title}>{'450F'}</Text>
            </View>
            <Text style={styles.subtitle}>
              {
                'While <Fahrenheit 451> explores the suppression of ideas/literature, <450F> aims to symbolize their proliferation.'
              }
            </Text>
          </Animated.View>

          <View>
            <Text style={styles.h1}>{'LOGIN'}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setUsername(value)}
              placeholder="USERNAME"
              placeholderTextColor="#bbb"
              onFocus={() => keyboardEvent('up')}
              onBlur={() => keyboardEvent('down')}
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setPassword(value)}
              placeholder="PASSWORD"
              placeholderTextColor="#bbb"
              onFocus={() => keyboardEvent('up')}
              onBlur={() => keyboardEvent('down')}
            />

            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.button1]}
                onPress={() => navigation.navigate('RegisterPage')}
              >
                <Text style={[styles.buttonText, styles.button1Text]}>
                  {'REGISTER'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.button2]}
                onPress={() => verfication(navigation)}
              >
                <Text style={[styles.buttonText, styles.button2Text]}>
                  {'LOGIN'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LoginPage
