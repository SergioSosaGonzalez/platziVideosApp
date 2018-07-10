import React from 'react'

import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

const LoaderUI = props => (
    <View style = { styles.container }>
        <ActivityIndicator size='large'/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})

export default LoaderUI