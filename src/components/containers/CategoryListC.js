import React, { Component } from 'react'
import Layout from '../ui/CategoryListUI'
import Empty from '../../widgets/ui/EmptyUI'
import Separator from '../../widgets/ui/HorizontalSeparatorUI'
import Category from '../ui/CategoryUI'
import Loader from '../../widgets/ui/LoaderUI'

import {
    FlatList
} from 'react-native'

class CategoryListC extends Component {
    renderEmpty = () => (
        <Empty text = "No hay categorias :(" />
    )
    itemSeparator = () => (
        <Separator/>
    )
    renderItem = ({item}) => (
        <Category {...item}/>
    )
    keyExtractor = (item) => {
        return Math.random().toString()
    }
    render() {
        return (
            <Layout
                title = "Categorías" 
            >
            { this.props.loading ? (
                <Loader />
            ) : (
                <FlatList
                    data                   = { this.props.list }
                    renderItem             = { this.renderItem }
                    horizontal             = {true}
                    keyExtractor           = { this.keyExtractor }
                    ListEmptyComponent     = { this.renderEmpty }
                    ItemSeparatorComponent = { this.itemSeparator }
                />
            )}
            </Layout> 
        )
    }
}

export default CategoryListC