/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Home   from './src/views/containers/HomeC'
import Header from './src/widgets/ui/HeaderUI'
import SuggestionList from './src/widgets/containers/SuggestionList'

import {
  Platform,
  Text
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Header />
        <Text>buscador</Text>
        <Text>categorias</Text>
        <SuggestionList></SuggestionList>
      </Home>
    );
  }
}
