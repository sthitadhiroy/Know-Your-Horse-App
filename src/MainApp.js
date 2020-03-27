import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';
import Splash from './Views/Splash/index';
import Landing from './Views/Landing/index';
import Login from './Views/Login/index';
import Registration from './Views/Registration/index';
import Menu from './Views/Menu/index';
import MainPage from './Views/MainPage';
import TriviaPage from './Views/TriviaPage/index';

const navigationOptions = {header: null};

const unauthorizedStack = createStackNavigator(
  {
    Splash: {screen: Splash, navigationOptions},
  },
  {
    initialRouteName: 'Splash',
    navigationOptions,
  },
);

const landingStack = createStackNavigator(
  {
    Landing: {screen: Landing, navigationOptions},
  },
  {
    initialRouteName: 'Landing',
    navigationOptions,
  },
);
const logInStack = createStackNavigator(
  {
    Login: {screen: Login, navigationOptions},
  },
  {
    initialRouteName: 'Login',
    navigationOptions,
  },
);

const registrationStack = createStackNavigator(
  {
    Registration: {screen: Registration, navigationOptions},
  },
  {
    initialRouteName: 'Registration',
    navigationOptions,
  },
);
const menuStack = createStackNavigator(
  {
    Menu: {screen: Menu, navigationOptions},
  },
  {
    initialRouteName: 'Menu',
    navigationOptions,
  },
);
const mainPageStack = createStackNavigator(
  {
    MainPage: {screen: MainPage, navigationOptions},
  },
  {
    initialRouteName: 'MainPage',
    navigationOptions,
  },
);
const triviaPageStack = createStackNavigator(
  {
    TriviaPage: {screen: TriviaPage, navigationOptions},
  },
  {
    initialRouteName: 'TriviaPage',
    navigationOptions,
  },
);

const Routes = createStackNavigator(
  {
    unauthorized: {screen: unauthorizedStack},
    Landing: {screen: landingStack},
    LogIn: {screen: logInStack},
    Registration: {screen: registrationStack},
    Menu: {screen: menuStack},
    MainPage: {screen: mainPageStack},
    TriviaPage: {screen: triviaPageStack},
  },
  {
    initialRouteName: 'unauthorized',
  },
);

const MainApp = createAppContainer(Routes);
export default MainApp;
