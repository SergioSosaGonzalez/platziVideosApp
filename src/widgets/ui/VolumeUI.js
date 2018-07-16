import React from 'react'
import {
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Image,
    StyleSheet
} from 'react-native'

import imgVolumeH from '../../../assets/volume-high-48x48.png'

const VolumeUI = props => (
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
        <View>
            <Image style={ styles.icon }
                source = { imgVolumeH }/>
        </View>
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
        height: 36,
        width: 36
    }
})

export default VolumeUI