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

const RegisterPage = ({ navigation }) => {
  const [Fullname, setFullname] = useState('')
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const fadeAnim = useRef(new Animated.Value(1)).current

  const submit = () => {
    if (!Fullname) {
      alert('Please enter Full Name')
      return
    }
    if (!Username) {
      alert('Please enter Username')
      return
    }
    if (!Password) {
      alert('Please enter Password')
      return
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO user (username, password, fullname) VALUES (?,?,?)',
        [Username, Password, Fullname],
        (tx, results) => {
          alert(results.rowsAffected)
          if (results.rowsAffected > 0) {
            alert('Success')
            navigation.navigate('LoginPage')
          } else {
            alert('Registration Failed')
          }
        },
      )
    })
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
    <KeyboardAvoidingView behavior="height" style={styles.changedContainer}>
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
            <Text style={styles.h1}>{'REGISTER'}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setFullname(value)}
              placeholder="FULLNAME"
              placeholderTextColor="#ccc"
              onFocus={() => keyboardEvent('up')}
              onBlur={() => keyboardEvent('down')}
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setUsername(value)}
              placeholder="USERNAME"
              placeholderTextColor="#ccc"
              onFocus={() => keyboardEvent('up')}
              onBlur={() => keyboardEvent('down')}
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setPassword(value)}
              placeholder="PASSWORD"
              placeholderTextColor="#ccc"
              onFocus={() => keyboardEvent('up')}
              onBlur={() => keyboardEvent('down')}
            />

            <View style={styles.bottomButtonsContainer}>
              <TouchableOpacity
                style={[styles.button, styles.button1]}
                onPress={() => navigation.navigate('LoginPage')}
              >
                <Text style={[styles.buttonText, styles.button1Text]}>
                  {'CANCEL'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.button2]}
                onPress={() => submit(navigation)}
              >
                <Text style={[styles.buttonText, styles.button2Text]}>
                  {'REGISTER'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default RegisterPage
