import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const HorizontalSeparatorUI = props => (
    <View style = { [
        styles.separator,
        {
            borderRightColor: props.color ? props.color : 'rgba(0,0,0,.05)'
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