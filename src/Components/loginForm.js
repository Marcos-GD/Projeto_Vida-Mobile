import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

// import { Container } from './styles';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.component}>
        <View>
          <Text style={styles.loginTitle}>SEJA BEM-VINDO!</Text>
          <Text style={styles.loginSubtitle}>
            É um prazer ter você conosco.
          </Text>
        </View>
        <View style={{height: 30}} />
        <Text style={styles.inputTitle}>E-mail:</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder="Seu email da conta"
            keyboardType="email-address"
          />
        </View>
        <View style={{height: 10}} />
        <Text style={styles.inputTitle}>Senha:</Text>
        <View style={styles.inputBox}>
          <TextInput placeholder="Sua senha" secureTextEntry />
        </View>
        <View style={styles.confirm}>
          <CheckBox />
          <TouchableOpacity style={styles.confirmButton}>
            <Text style={{color: 'white'}}>Enter</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    height: '80%',
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  loginTitle: {
    color: '#44F',
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 50,
  },
  loginSubtitle: {
    color: '#999',
    fontSize: 19,
  },
  inputTitle: {
    color: '#999',
    fontSize: 15,
  },
  inputBox: {
    borderWidth: 1,
    height: 50,
    paddingLeft: 5,
    borderLeftWidth: 5,
    borderLeftColor: '#085',
    borderBottomColor: '#DDD',
    borderTopColor: '#DDD',
    borderRightColor: '#DDD',
  },
  confirm: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#2A7',
    height: 50,
    width: 80,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
