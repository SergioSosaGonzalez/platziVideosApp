import React, { Component } from 'react'
import Layout from '../ui/SuggestionListUI'

import {
    FlatList,
    Text
} from 'react-native'

class SuggestionListC extends Component {
    render() {
        const list = [
            {title: 'Titulo'     , key: '1'},
            {title: 'Otro Titulo', key: '2'}
        ]
        return (
            <Layout
                title = "Recomendado para tí"
            >
                <FlatList
                    data = { list }
                    renderItem = { ({item}) => <Text>{item.title}</Text> }
                />
            </Layout>
        )
    }
}

export default SuggestionListC