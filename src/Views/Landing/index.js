import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  AsyncStorage,
  View,
  Button,
  TextInput,
  Text,
  Linking,
  Image,
  Icon,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {Container, Header, Left, Right, Body, Title} from 'native-base';

import styles from './styles';

class Landing extends Component {
  FunctionToLogin = () => {
    this.props.navigation.navigate('Login');
  };
  FunctionToRegister = () => {
    this.props.navigation.navigate('Registration');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../Images/normal.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <Container
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginTop: 20,
              resizeMode: 'contain',
              width: 300,
              height: 230,
            }}
            source={require('../../Images/knowyourhorse.png')}
          />
          <View style={{padding: 10}} />
          <View
            style={{
              width: 300,
              height: 300,
              marginTop: 70,
            }}>
            <Button
              title="Sign In"
              style={styles.btndealer}
              onPress={this.FunctionToLogin}
              textStyle={styles.textStyle}
            />
            <View style={{padding: 10}} />
            <Button
              title="Sign Up"
              style={styles.btndealer}
              onPress={this.FunctionToRegister}
              textStyle={styles.textStyle}
            />
          </View>
        </Container>
      </ImageBackground>
    );
  }
}

export default Landing;
