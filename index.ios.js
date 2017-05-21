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
  Button,
  View
} from 'react-native';

export default class SimpleCounter extends Component {
  constructor() {
    super();

    this.state = {counter: 0};

    this.onPressButtonIncrement = this.onPressButtonIncrement.bind(this);
    this.onPressButonReset = this.onPressButonReset.bind(this);
  }

  onPressButtonIncrement() {
    this.setState({counter: ++this.state.counter});
  }

  onPressButonReset() {
    this.setState({counter: 0});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text id="text-counter" style={styles.counter}>{this.state.counter}</Text>
        <Button id="button-increment"
                title="Increment"
                color="green"
                onPress={this.onPressButtonIncrement}
        />
        <Button id="button-reset"
                title="Reset"
                onPress={this.onPressButonReset}
        />
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
