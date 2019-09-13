import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  FlatList,
  Image,
} from 'react-native';
import {connect} from 'react-redux';

import SearchBar from './searchBar';
import Card from './card';

class GitHubRequest extends Component {
  componentDidMount() {
    console.log('created');
  }
  componentDidUpdate() {
    console.log('updated component');
  }

  /*  For DEBUG
        <TouchableHighlight
          style={{backgroundColor: '#559'}}
          onPress={() => this.forceUpdate()}>
          <Text>Refresh</Text>
        </TouchableHighlight> 
  */

  showUserCard = () => {
    if (this.props.requestFail)
      return (
        <View>
          <Text style={{color: 'red'}}>error</Text>
          <Text style={{color: 'red'}}>{this.props.requestFail}</Text>
        </View>
      );
    if (this.props.userdata === undefined) return;
    else return <Card />;
  };

  render() {
    return (
      <View style={styles.component}>
        <Text style={styles.title}>Usuário do GitHub:</Text>
        <SearchBar />
        {this.showUserCard()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    height: 700,
    maxHeight: '100%',
    backgroundColor: '#F5F5F5',
    padding: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  userdata: state.userdata.data,
  requestFail: state.userdata.message,
});

export default connect(
  mapStateToProps,
  null,
)(GitHubRequest);
