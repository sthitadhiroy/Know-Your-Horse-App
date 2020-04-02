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
import {SliderBox} from 'react-native-image-slider-box';
import {Container, Header, Left, Right, Body, Title} from 'native-base';

import styles from './styles';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://www.thesprucepets.com/thmb/sAL-HcnmME6QjITh05oGnhze6AE=/4223x3167/smart/filters:no_upscale()/palomino-horses-cantering-in-field-452240765-588f8e483df78caebc18aa61.jpg',
        'https://static-nexus.prod.postmedia.digital/wp-content/uploads/2019/04/horses-asthma.jpg?w=150&h=150&crop=1&quality=80&strip=all',
        'https://www.agro.crs/wcm/connect/www.agro.crs5301/43ec2e12-a6ea-4fba-bb4b-dca54fe90f5e/CaliberHorseFeed_Hero.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2IKA1G82MOM2F0QOF0CTUFHPS6-43ec2e12-a6ea-4fba-bb4b-dca54fe90f5e-lQkbtoO',
        'https://bloximages.newyork1.vip.townnews.com/nny360.com/content/tncms/assets/v3/editorial/1/a5/1a579530-356b-52d2-a14e-d08786729daf/5dea892b4cce2.image.jpg?resize=1200%2C800',
        'https://robbreportedit.files.wordpress.com/2019/12/shutterstock_1161588607.jpg?w=1000',
      ],
    };
  }
  FunctionToLogin = () => {
    this.props.navigation.navigate('Login');
  };
  FunctionToTermsandCon = () => {
    this.props.navigation.navigate('TermsandC');
  };
  FunctionToRegister = () => {
    this.props.navigation.navigate('Registration');
  };
  render() {
    return (
      <ImageBackground
        source={require('../../Images/landing003.jpg')}
        style={{width: '100%', height: '100%'}}>
        <Container
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
          }}>
          <View style={{padding: 5}} />
          <View
            style={{
              height: 300,
            }}>
            <SliderBox
              images={this.state.images}
              sliderBoxHeight={310}
              sliderBoxWidth={200}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              autoplay
              circleLoop
            />
            <View style={{padding: 10}} />
            <View
              style={{
                height: 200,
                margin: 30,
                marginTop: 60,
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
              <View style={{padding: 10}} />
              <Button
                title="Terms and Conditions"
                style={styles.btndealer}
                onPress={this.FunctionToTermsandCon}
                textStyle={styles.textStyle}
              />
            </View>
          </View>
        </Container>
      </ImageBackground>
    );
  }
}

export default Landing;
