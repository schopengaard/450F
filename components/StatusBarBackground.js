'use strict'
import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform, NativeModules} from 'react-native';
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

class StatusBarBackground extends Component{
  render(){
    return(
      <View style={[styles.statusBarBackground, this.props.style || {}]}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
		height: STATUSBAR_HEIGHT,
		...Platform.select({
			ios: {
				backgroundColor: "#333",
			},
			android: {
				backgroundColor: '#333',
			}
		}),
    
  }

})

module.exports= StatusBarBackground