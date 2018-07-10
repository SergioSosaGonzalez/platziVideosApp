import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const PlayerLayoutUI = props => (
    <View style = { styles.container }>
        <View style={ styles.video }>
            { props.video }
        </View>
        { props.loading && (
            <View style = { styles.overlay }>
                { props.loader }
            </View>
        )}
        <View
            style={ styles.controls }
        >
            { props.controls }
        </View>
    </View>
)

const styles = StyleSheet.create({
    controls: {

    },
    overlay: {
        position: 'absolute',
        left  : 0,
        top   : 0,
        right : 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    container: {
        paddingTop: '56.25%',
        overflow: 'hidden'
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