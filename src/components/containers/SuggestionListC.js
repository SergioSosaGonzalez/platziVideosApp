import React, { Component } from 'react'
import Layout from '../ui/SuggestionListUI'
import Empty from '../../widgets/ui/EmptyUI'
import Separator from '../../widgets/ui/VerticalSeparatorUI'
import Suggestion from '../ui/SuggestionUI'
import Loader from '../../widgets/ui/LoaderUI'

import {
    FlatList
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
    keyExtractor = (item) => {
        return item.id.toString()
    }
    render() {
        return (
            <Layout
                title = "Recomendado para tí" 
            >
                { this.props.loading ? (
                    <Loader />
                ) : (
                    <FlatList
                        data                   = { this.props.list }
                        renderItem             = { this.renderItem }
                        keyExtractor           = { this.keyExtractor }
                        ListEmptyComponent     = { this.renderEmpty }
                        ItemSeparatorComponent = { this.itemSeparator }
                    />
                )}
            </Layout> 
        )
    }
}

export default SuggestionListC