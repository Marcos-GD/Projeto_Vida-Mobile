import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import GitHubRequest from './Components/githubRequest';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.component}>
          <StatusBar backgroundColor="#085" />
          <GitHubRequest />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flex: 1,
    backgroundColor: '#9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
