import React, { useState, useRef, useEffect } from 'react';
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
} from 'react-native';
import StatusBarBackground from '../components/StatusBarBackground';
import logoTall from '../assets/img/logoTall.png';
import styles from '../components/Style';
import { openDatabase } from 'expo-sqlite';

var db = openDatabase({ name: 'UserDatabase.db' });

const LoginPage = ({ navigation }) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const verfication = (navigation) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT count(username) FROM user where username=? and password=?',
        [Username, Password],
        (tx, results) => {
          //alert(JSON.stringify(results.rows));
          if (results.rows[0]['count(username)'] == 1) {
            navigation.navigate('HomePage');
          } else {
            alert('Invalid username or password');
          }
          //alert(typeof(results.rows[0]))
          //alert(results.rows.length);
        }
      );
    });
    navigation.navigate('Home', { screen: 'HomePage' });
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
        keyboardEvent('up');
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
        keyboardEvent('down');
      }
    );

    db.transaction(function (tx) {
      tx.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='user'",
        [],
        function (tx, res) {
          if (res.rows.length == 0) {
            tx.executeSql('DROP TABLE IF EXISTS user');
            tx.executeSql(
              'CREATE TABLE IF NOT EXISTS user (username VARCHAR(20) PRIMARY KEY, fullname VARCHAR(20),password VARCHAR(20))'
            );
            tx.executeSql('DROP TABLE IF EXISTS book');
            tx.executeSql(
              'CREATE TABLE if not EXISTS book(bookID Integer PRIMARY KEY, bookname VARchar(50), author Varchar(20), bookdetail VARchar(255), publicationdate date, category varchar(20), imagelocation Varchar(50));'
            );
            tx.executeSql(
              "INSERT INTO book (bookID,bookname,author,bookdetail,publicationdate,category,imagelocation) VALUES ('1','The Song of Achilles: A Novel','Madeline Miller','#1 New York Times Bestseller','28-08-2012','Fiction','1'),('2','The Nightingale: A Novel','Kristin Hannah','#1 New York Times Bestseller','25-04-2017','Fiction','2'),('3','Survive The Night: A Novel','Riley Sager','New York Times Bestseller','29-06-2021','Fiction','3'),('4','The Intelligent Investor Rev Ed.','Benjamin Graham','Investing','21-02-2006','Business','4'),('5','The 7 Habits Of Highly Effective People: 30th Anniversary Edition','Stephen R. Covey','Personal Development','19-05-2020','Business','5'),('6','Big Magic: Creative Living Beyond Fear','Elizabeth Gilbert','#1 New York Times Bestseller','27-09-2016','Business','6'),('7','The Body Keeps The Score: Brain, Mind, And Body In The Healing Of Trauma','Bessel Van Der Kolk','#1 New York Times Bestseller','08-09-2015','Health','7'),('8','When The Body Says No: The Cost Of Hidden Stress','Gabor Maté','National Bestseller','03-02-2004','Health','8'),('9','The Untethered Soul: The Journey Beyond Yourself','Michael A. Singer, Michael Singer','#1 New York Times Bestseller','03-10-2007','Health','9'),('10','RENEGADES: Born in the USA','BARACK OBAMA, Bruce Springsteen','life,music,and love of America','26-10-2021','History','10');",
              [],
              function (tx, res) {
                tx.executeSql('select * from book', [], function (tx, results) {
                  for(var i=0;i<results.rows.length;i++){
                    //alert(results.rows[i]["bookID"]);
                    //setTimeout(2000);
                  }
                });
              }
            );
          }
        }
      );
    });

    db.transaction(function (tx) {});

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  });

  const keyboardEvent = (e) => {
    if (e == 'up') {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.changedContainer}>
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
                onPress={() => navigation.navigate('RegisterPage')}>
                <Text style={[styles.buttonText, styles.button1Text]}>
                  {'REGISTER'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.button2]}
                onPress={() => verfication(navigation)}>
                <Text style={[styles.buttonText, styles.button2Text]}>
                  {'LOGIN'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginPage;
