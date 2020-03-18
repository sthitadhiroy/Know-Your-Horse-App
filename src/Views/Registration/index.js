import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Button,
  TextInput,
  Text,
  Linking,
  Image,
  Alert,
  ImageBackground,
  Modal,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Root,
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Icon,
  Item,
  Input,
  Label,
  Picker,
  Toast,
  Spinner,
} from 'native-base';

import styles from './regStyles';

class Registration extends Component {
  FunctionToSubmit = () => {
    this.props.navigation.navigate('MainPage');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../Images/normal.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <Container style={{flex: 1, backgroundColor: 'transparent'}}>
          <KeyboardAwareScrollView
            enableOnAndroid
            enableAutomaticScroll
            keyboardOpeningTime={0}
            extraHeight={Platform.select({android: 200})}>
            <Image
              style={{
                marginTop: 20,
                marginLeft: 25,
                resizeMode: 'contain',
                width: 300,
                height: 150,
              }}
              source={require('../../Images/knowyourhorse.png')}
            />
            <View style={styles.container}>
              <View style={{padding: 10}} />

              <View style={{flexDirection: 'row'}}>
                <View style={{width: '100%', padding: 10}}>
                  <TextInput
                    placeholder="Enter name"
                    style={{
                      width: '90%',
                      backgroundColor: 'white',
                      borderColor: 'grey',
                      borderWidth: 1,
                      padding: 10,
                    }}
                  />
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{width: '100%', padding: 10}}>
                  <TextInput
                    placeholder="Enter email"
                    style={{
                      width: '90%',
                      backgroundColor: 'white',
                      borderColor: 'grey',
                      borderWidth: 1,
                      padding: 10,
                    }}
                  />
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{width: '100%', padding: 10}}>
                  <TextInput
                    placeholder="Mobile Number"
                    style={{
                      width: '90%',
                      backgroundColor: 'white',
                      borderColor: 'grey',
                      borderWidth: 1,
                      padding: 10,
                    }}
                  />
                </View>
              </View>

              <View style={{flexDirection: 'row'}}>
                <View style={{width: '100%', padding: 10}}>
                  <TextInput
                    placeholder="Password"
                    style={{
                      width: '90%',
                      backgroundColor: 'white',
                      borderColor: 'grey',
                      borderWidth: 1,
                      padding: 10,
                    }}
                    secureTextEntry={true}
                  />
                </View>
              </View>
              <View style={{padding: 10}} />
              <Button
                primary
                title="SUBMIT"
                style={styles.btnsubmit}
                textStyle={styles.textStyle}
                onPress={this.FunctionToSubmit}
              />
            </View>
          </KeyboardAwareScrollView>
        </Container>
      </ImageBackground>
    );
  }
}
export default Registration;
