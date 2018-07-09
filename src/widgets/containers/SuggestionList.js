import React, { Component } from 'react'
import Layout from '../ui/SuggestionListUI'
import Empty from '../../widgets/ui/EmptyUI'
import Separator from '../../widgets/ui/VerticalSeparatorUI'

import {
    FlatList,
    Text
} from 'react-native'

class SuggestionListC extends Component {
    renderEmpty = () => (
        <Empty text = "No hay sugerencias :(" />
    )
    itemSeparator = () => (
        <Separator color = 'red'/>
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
                    data = { list }
                    ListEmptyComponent = { this.renderEmpty }
                    ItemSeparatorComponent = { this.itemSeparator }
                    renderItem = {({item}) => (
                        <Text>{item.title}</Text>
                    )}
                />
            </Layout> 
        )
    }
}

export default SuggestionListC