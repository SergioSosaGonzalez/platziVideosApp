import React, { Component } from 'react'
import Video from 'react-native-video'
import Layout from '../ui/PlayerLayoutUI'
import {
    View,
    StyleSheet
} from 'react-native'

class PlayerC extends Component {
    render () {
        return(
            <Layout
                video = {
                    <Video
                        source     = { { uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' } }
                        style      = { styles.video }
                        resizeMode = 'cover'  
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    player: {
        flex: 1,
        height: 180
    },
    video: {
        position: 'absolute',
        left  : 0,
        top   : 0,
        right : 0,
        bottom: 0
    }
})

export default PlayerC