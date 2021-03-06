import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const VerticalSeparatorUI = props => (
    <View style = { [
        styles.separator,
        {
            borderTopColor: props.color ? props.color : '#dedede'
        }
    ]}/>
)

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1
    }
})

export default VerticalSeparatorUI