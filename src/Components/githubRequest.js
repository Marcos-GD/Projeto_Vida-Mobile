import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

import {connect} from 'react-redux';

import SearchBar from './searchBar';

class GitHubRequest extends Component {
  componentDidMount() {
    console.log(this.props.user);
  }
  componentDidUpdate() {
    console.log(this.props.user);
  }

  /*  For DEBUG
        <TouchableHighlight
          style={{backgroundColor: '#559'}}
          onPress={() => this.forceUpdate()}>
          <Text>Refresh</Text>
        </TouchableHighlight> */

  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.title}>Usuário do GitHub:</Text>
        <SearchBar />
        <Text>{this.props.user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    height: '80%',
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({user: state.userdata.username});

export default connect(
  mapStateToProps,
  null,
)(GitHubRequest);
