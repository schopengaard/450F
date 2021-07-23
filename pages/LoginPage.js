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

//test
const verfication = (navigation) =>{
	navigation.navigate('HomePage');
}

const RegisterPage = ({ navigation }) => {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')

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
              <Text style={styles.h1}> {'LOGIN'} </Text>
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
                <Text style={[styles.buttonText, styles.cancelButtonText]}>
                  {'CANCEL'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={()=>verfication(navigation)}>
                <Text style={styles.buttonText}> {'SUBMIT'} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default RegisterPage
