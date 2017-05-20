/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SimpleCounter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text id="text-counter" style={styles.counter}>0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  counter: {
    fontSize: 92,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('SimpleCounter', () => SimpleCounter);
