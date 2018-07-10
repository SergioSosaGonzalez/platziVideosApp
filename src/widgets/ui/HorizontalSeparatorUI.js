import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const HorizontalSeparatorUI = props => (
    <View style = { [
        styles.separator,
        {
            borderRightColor: props.color ? props.color : '#dedede'
        }
    ]}/>
)

const styles = StyleSheet.create({
    separator: {
        flex: 1,
        marginHorizontal: 5,
        borderRightWidth: 1
    }
})

export default HorizontalSeparatorUI