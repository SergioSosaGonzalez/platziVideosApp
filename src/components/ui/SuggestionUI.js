import React from 'react'

import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native'

const SuggestionUI = props => (
    <View style = { styles.container }>
        <View style = { styles.left  }>
            <Image
                style =  { styles.cover }
                source = { { uri: props.medium_cover_image } }
            />
            <View style = { styles.genreContainer }>
                <Text style = { styles.genreText }>
                    { props.genres ? props.genres[0] : 'n/a'}
                </Text>
            </View>
        </View>
        <View style = { styles.right }>
            <Text style = { styles.title  }>{ props.title }</Text>
            <Text style = { styles.year   }>{ props.year }</Text>
            <Text style = { styles.rating }>{ props.rating } estrellas</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain'
    },
    left: {

    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    genreContainer: {
        position:'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black'
    },
    genreText: {
        color: 'white',
        fontSize: 11,
        paddingVertical: 5,
        paddingHorizontal: 7
    },
    title: {
        fontSize: 18,
        color: '#45546d'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical:  4,
        paddingHorizontal: 6,
        color: '#FFFFFF',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden',
        alignSelf: 'flex-start'
    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default SuggestionUI
