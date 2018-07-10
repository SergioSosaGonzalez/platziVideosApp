/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';

import Home   from './src/views/containers/HomeC'
import Header from './src/components/ui/HeaderUI'
import SuggestionList from './src/components/containers/SuggestionListC'
import CategoryList   from './src/components/containers/CategoryListC'
import API    from './src/utils/api'
import Player from './src/widgets/containers/PlayerC'

import {
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: [],
    loadingCategories: true,
    loadingSuggestions: true

  }
  async componentDidMount(){
    const movies     = await API.getSuggestions( 30 )
    const categories = await API.getMovies()
    this.setState({
      suggestionList: movies,
      categoryList  : categories,
      loadingCategories: false,
      loadingSuggestions: false
    })
  }
  render() {
    const { loadingCategories, loadingSuggestions } = this.state
    return (
      <Home>
        <Header />
        <Player />
        <Text>buscador</Text>
        <CategoryList
          loading = { loadingCategories }
          list = { this.state.categoryList }
        />
        <SuggestionList
          loading = { loadingSuggestions }
          list = { this.state.suggestionList }
        />
      </Home>
    );
  }
}
