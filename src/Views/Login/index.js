import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Button,
  View,
  TextInput,
  Text,
  Linking,
  Image,
  TextInputBase,
  ImageBackground,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Item,
  Input,
  Label,
  Toast,
  Spinner,
} from 'native-base';

import styles from './styles';

class Login extends Component {
  FunctionToSubmit = () => {
    this.props.navigation.navigate('Menu');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../Images/login101.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <Container style={{flex: 1, backgroundColor: 'transparent'}}>
          <Image
            style={{
              marginTop: 20,
              marginLeft: 30,
              resizeMode: 'contain',
              width: 300,
              height: 150,
            }}
            source={require('../../Images/knowyourhorse.png')}
          />

          <View style={styles.container}>
            <View style={{width: '100%', padding: 20}}>
              <TextInput
                placeholder="User Name"
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  borderColor: 'grey',
                  borderWidth: 1,
                  padding: 8,
                }}
              />
            </View>
            <View style={{width: '100%', padding: 20}}>
              <TextInput
                placeholder="Password"
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  borderColor: 'grey',
                  borderWidth: 1,
                  padding: 8,
                }}
                secureTextEntry={true}
              />
            </View>
            <Button
              title="Login"
              style={styles.btnlogin}
              textStyle={styles.textStyle}
              onPress={this.FunctionToSubmit}
            />
          </View>
        </Container>
      </ImageBackground>
    );
  }
}

export default Login;
