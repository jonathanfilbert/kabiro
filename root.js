import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OnboardPage from './containers/OnboardPage';
import MainPage from './containers/MainPage';
import WinPage from './containers/WinPage';

const Root = createStackNavigator(
  {
    InputScreen: {
      screen: OnboardPage,
    },
    MainScreen: {
      screen: MainPage,
    },
    ResultScreen: {
      screen: WinPage,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'InputScreen',
  },
);

export default createAppContainer(Root);
