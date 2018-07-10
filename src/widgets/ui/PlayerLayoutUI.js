import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const PlayerLayoutUI = props => (
    <View style={ styles.container }>
        <View style={ styles.video }>
            { props.video }
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        paddingTop: '56.25%'
    },
    video: {
        position: 'absolute',
        left  : 0,
        top   : 0,
        right : 0,
        bottom: 0,
        backgroundColor: '#333333'
    }
})

export default PlayerLayoutUI