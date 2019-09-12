import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Card extends Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{this.props.userdata.username}</Text>
        <Image
          source={{uri: this.props.userdata.avatar}}
          style={styles.avatar}
        />
        <View style={styles.footer}>
          <Text style={styles.name}>{this.props.userdata.name}</Text>
          <Text style={styles.bio} numberOfLines={3}>
            {this.props.userdata.bio}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    height: 400,
    width: 300,
    maxHeight: '70%',
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignSelf: 'center',
    overflow: 'hidden',
    elevation: 3,
  },
  title: {
    alignSelf: 'center',
    color: '#ddd',
  },
  avatar: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  footer: {
    flex: 1,
    bottom: 8,
    padding: 5,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  bio: {
    alignSelf: 'center',
    fontSize: 13,
    color: '#999',
  },
});

const mapStateToProps = state => ({
  userdata: state.userdata.data,
});

export default connect(
  mapStateToProps,
  null,
)(Card);
