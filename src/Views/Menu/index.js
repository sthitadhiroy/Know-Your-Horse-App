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

class Menu extends Component {
  FunctionToTrivia = () => {
    this.props.navigation.navigate('TriviaPage');
  };
  FunctionToQuiz = () => {
    this.props.navigation.navigate('MainPage');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../Images/menu106.jpeg')}
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
              title="Trivia About Horse"
              style={styles.btndealer}
              onPress={this.FunctionToTrivia}
              textStyle={styles.textStyle}
            />
            <View style={{padding: 10}} />
            <Button
              title="Quiz From Horse"
              style={styles.btndealer}
              onPress={this.FunctionToQuiz}
              textStyle={styles.textStyle}
            />
          </View>
        </Container>
      </ImageBackground>
    );
  }
}

export default Menu;
