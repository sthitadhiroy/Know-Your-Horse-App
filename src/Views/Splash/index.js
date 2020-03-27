import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage, View, Image, ImageBackground} from 'react-native';

import ReactTimeout from 'react-timeout';
import {StackActions, NavigationActions} from 'react-navigation';

import styles from './styles';

const SPLASH_TIMEOUT = 4000;

class Splash extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Landing');
    }, SPLASH_TIMEOUT);
  }

  componentWillUnmount() {
    this.isMounted = false;
  }

  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../Images/opening.jpeg')}>
        <View style={styles.container}>
          <View style={{padding: 10}} />
          <Image
            style={{
              marginTop: 20,

              resizeMode: 'contain',
              width: 300,
              height: 230,
            }}
            source={require('../../Images/knowyourhorse.png')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Splash;
