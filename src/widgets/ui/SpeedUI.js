import React from 'react'
import {
    TouchableHighlight,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'

import imgSpeedL from '../../../assets/speed-left.png'
import imgSpeedR from '../../../assets/speed-right.png'

const SpeedUI = props => (
    <View style={ styles.speed }>
        <TouchableHighlight
            onPress = { props.onPressL }
            style = { styles.container }
            underlayColor = 'red'
            hitSlop = {{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5 
            }}
        >
            <Image style={ styles.icon }
                source = { imgSpeedL }/>
        </TouchableHighlight>
        <TouchableHighlight
            onPress = { props.onPressR }
            style = { styles.container }
            underlayColor = 'red'
            hitSlop = {{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5 
            }}
        >
            <View>
                <Image style={ styles.icon }
                    source = { imgSpeedR }/>
            </View>
        </TouchableHighlight>
    </View>
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
        height: 36,
        width: 36
    },
    speed: {
        flexDirection: 'row'
    }
})

export default SpeedUI