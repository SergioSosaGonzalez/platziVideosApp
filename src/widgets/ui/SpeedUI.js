import React from 'react'
import {
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    StyleSheet
} from 'react-native'

const SpeedUI = props => (
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
        { props.speed ? (
            <Text style={ styles.button }>FULL</Text>
        ) : (
            <Text style={ styles.button }>x</Text>
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
        paddingVertical: 5,
        paddingHorizontal: 10
    }
})

export default SpeedUI