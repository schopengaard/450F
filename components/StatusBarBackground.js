'use strict'
import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import styles from '../components/Style.js'

class StatusBarBackground extends Component {
  render() {
    return (
      <View style={[styles.statusBarBackground, this.props.style || {}]}></View>
    )
  }
}

export default StatusBarBackground
