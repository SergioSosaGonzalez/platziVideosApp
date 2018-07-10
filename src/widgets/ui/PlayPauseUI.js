import React from 'react'
import {
    TouchableHighlight,
    View,
    Image,
    StyleSheet
} from 'react-native'

import imgPlay  from '../../../assets/play-48x48.png'
import imgPause from '../../../assets/pause-48x48.png'

const PlayPauseUI = props => (
    <TouchableHighlight
        onPress = { props.onPress }
        style = { styles.container }
        underlayColor = 'red'
        hitSlop = {{
            left: 5,
            top: 5,
            bottom: 5,
            right: 5 
        }}
    >
        { props.paused ? (
            <View style={ styles.button }>
                <Image style={ styles.icon } source = { imgPlay } />
            </View>
        ) : (
            <View style={ styles.button }>
                <Image style={ styles.icon } source = { imgPause } />
            </View>
        )}
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        borderRadius: 20,
        overflow: 'hidden'
    },
    button: {

    },
    icon: {
        width : 36,
        height: 36
    }
})

export default PlayPauseUI