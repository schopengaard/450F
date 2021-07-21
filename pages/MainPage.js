import * as React from 'react'
import {
  Image,
  Button,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import styles from '../components/Style'

const MainPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.rootContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Image source={require('../assets/mie.png')} style={styles.logo} />
            <Text style={styles.title}> {'450F'} </Text>
            <Text style={styles.subtitle}>
              
              {'While <Fahrenheit 451> explores the suppression of'}
              <Text style={[styles.italic, styles.bold]}> ideas </Text>
              {', <450F> aims to symbolize their proliferation.'}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.mainButton}
              onPress={() => navigation.navigate('RegisterPage')}
            >
              <Text style={styles.buttonText}> REGISTER </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.mainButton,
                {
                  backgroundColor: '#00000000',
                  borderWidth: 3,
                  borderColor: '#FF473C',
                },
              ]}
              onPress={() => navigation.navigate('LoginPage')}
            >
              <Text style={[styles.buttonText, { color: '#FF473C' }]}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MainPage
