import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const PlayerLayoutUI = props => {
    return (
        <View style = { props.fullscreen ? styles.containerMaximized : styles.container }>
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
}

const styles = StyleSheet.create({
    controls: {
        position: 'absolute',
        width: '100%',
        bottom: 0
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
    containerMaximized: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    video: {
        position: 'absolute',
        left  : 0,
        top   : 0,
        right : 0,
        bottom: 0,
        backgroundColor: '#222222'
    }
})

export default PlayerLayoutUI