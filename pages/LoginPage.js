import React, { useState, useRef } from 'react'
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
} from 'react-native'
import styles from '../components/Style'

//test
const verfication = (navigation) => {
  navigation.navigate('HomePage')
}

const LoginPage = ({ navigation }) => {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const fadeAnim = useRef(new Animated.Value(1)).current

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
        duration: 1000,
        useNativeDriver: true,
      }).start()
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.changedContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.mainContainer}>
          <Animated.View style={[styles.topContainer, { opacity: fadeAnim }]}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/mieTall.png')}
                style={styles.logo}
              />
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
