import React, { useState } from 'react'
import {
  Image,
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import styles from '../components/Style'

const RegisterPage = ({ navigation }) => {
  const [UserAns, setUserAns] = useState('')
  const [Result, setResult] = useState('')
  const [Attempts, setAttempts] = useState(0)
  const [Correct, setCorrect] = useState(0)

  const compareAns = () => {
    let Ans = Num1 + Num2
    let input = UserAns
    if (parseInt(input) == Ans) {
      setResult('Congratulations! Correct!')
      setAttempts(Attempts + 1)
      setCorrect(Correct + 1)
    } else {
      setResult('Incorrect, correct answer is: ' + Ans)
      setAttempts(Attempts + 1)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'center',
                paddingHorizontal: 10,
              }}
            >
              <Image
                source={require('../assets/mieTall.png')}
                style={{ width: 35, height: 70, marginRight: 10 }}
              />
              <Text style={styles.h1}>{'REGISTER'}</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(value) => setUsername(value)}
              placeholder="USERNAME"
              placeholderTextColor="#777"
            />
            <TextInput
              style={styles.input}
              onChangeText={(value) => setPassword(value)}
              placeholder="PASSWORD"
              placeholderTextColor="#777"
            />
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}
            >
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={[styles.buttonText, styles.cancelButtonText]}>{'CANCEL'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={compareAns}>
                <Text style={styles.buttonText}>{'SUBMIT'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterPage
