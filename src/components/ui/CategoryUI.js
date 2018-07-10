import React from 'react'

import {
    View,
    ImageBackground,
    Text,
    StyleSheet
} from 'react-native'

const CategoryUI = props => {
    if( !props.genres ){
        return null
    }
    return (
        <ImageBackground
            style = { styles.wrapper }
            source = {{
                uri: props.background_image
            }}
        >
            <View style = { styles.container }>
                <Text style = { styles.genre }>{ props.genres[0] }</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        elevation: 2,
        textShadowRadius: 10
    }
})

export default CategoryUI
