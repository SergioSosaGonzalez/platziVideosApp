import React, { Component } from 'react'
import Layout from '../ui/SuggestionListUI'
import Empty from '../../widgets/ui/EmptyUI'
import Separator from '../../widgets/ui/VerticalSeparatorUI'
import Suggestion from '../../widgets/ui/SuggestionUI'

import {
    FlatList,
    Text
} from 'react-native'

class SuggestionListC extends Component {
    renderEmpty = () => (
        <Empty text = "No hay sugerencias :(" />
    )
    itemSeparator = () => (
        <Separator/>
    )
    renderItem = ({item}) => (
        <Suggestion {...item}/>
    )
    render() {
        const list = [
            {title: 'Hulk', key: '0'},
            {title: 'Avengers', key: '1'},
            {title: 'Pokemon' , key: '2'}
        ]
        return (
            <Layout
                title = "Recomendado para tí" 
            >
                <FlatList
                    data                   = { list }
                    renderItem             = { this.renderItem }
                    ListEmptyComponent     = { this.renderEmpty }
                    ItemSeparatorComponent = { this.itemSeparator }
                />
            </Layout> 
        )
    }
}

export default SuggestionListC