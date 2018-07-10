import React from 'react'
import {
    Text,
    StyleSheet,
    ImageBackground
} from 'react-native'

function CategoryListUI( props ){
    return (
        <ImageBackground
            source = { require('../../../assets/bg.png') }
            style  = { styles.container }
        >
            <Text style={ styles.title }>{ props.title }</Text>
            { props.children }
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        paddingHorizontal: 10
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    }
})

export default CategoryListUI