import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as searchActions from '../actions/search';

class SearchBar extends Component {
  state = {
    searchUser: '',
  };

  search = username => {
    this.props.search(username);
    // console.log(username);
    this.setState({searchUser: ''});
  };

  render() {
    return (
      <View style={styles.component}>
        <TextInput
          placeholder="usuário"
          style={styles.input}
          autoCapitalize="none"
          autoFocus={true}
          autoCorrect={false}
          value={this.state.searchUser}
          onChangeText={text => this.setState({searchUser: text})}
          onSubmitEditing={() => this.search(this.state.searchUser)}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.search(this.state.searchUser)}>
          <Text style={{marginTop: 8, color: '#fff'}}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    flexDirection: 'row',
    width: '100%',
  },
  input: {
    flex: 6,
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: 'white',
  },
  buttonStyle: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 5,
    backgroundColor: '#5C7',
    borderWidth: 1,
    borderColor: '#777',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 2,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({user: state.username});

const mapDispatchToProps = dispatch =>
  bindActionCreators(searchActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
