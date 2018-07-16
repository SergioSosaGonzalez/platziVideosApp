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
  Text
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    n: 0,
    suggestionList: [],
    categoryList: [],
    loadingCategories: true,
    loadingSuggestions: true,
    isFullscreen: false 
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
  onFullscreen = () => {
    const isFullscreen = !this.state.isFullscreen 
    const n = this.state.n
    this.setState({
      isFullscreen,
      n: n+1
    })
    console.log( n, 99998, isFullscreen, Math.random() ) 
  }
  render() {
    const { loadingCategories, loadingSuggestions } = this.state
    return (
      <Home>
        
          { !this.state.isFullscreen && <Header /> }

          <Player
            fullscreen = { this.state.isFullscreen }
            onFullscreen = { this.onFullscreen }
          />
          
          { !this.state.isFullscreen && <Text>buscador</Text> }
          { !this.state.isFullscreen && <CategoryList
              loading = { loadingCategories }
              list = { this.state.categoryList }
            />
          }
          { !this.state.isFullscreen && <SuggestionList
              loading = { loadingSuggestions }
              list = { this.state.suggestionList }
            />
          }
      </Home>
    )
  }
}
