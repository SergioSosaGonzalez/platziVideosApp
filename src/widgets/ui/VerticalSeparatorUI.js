import React from 'react'
import {
    View, 
    Text,
    StyleSheet
} from 'react-native'

const VerticalSeparatorUI = props => (
    <View style = { [
        styles.separator,
        {
            borderTopColor: props.color ? props.color : '#dedede'
        }
    ]}>
        <Text>Esto es un separador</Text>
    </View>
)

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1
    }
})

export default VerticalSeparatorUI