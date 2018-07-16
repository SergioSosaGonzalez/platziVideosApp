import React, { Component } from 'react'
import Video from 'react-native-video'
import Layout from '../ui/PlayerLayoutUI'
import ControlLayout from '../../widgets/ui/ControlLayoutUI'

import PlayPause  from '../../widgets/ui/PlayPauseUI'
import Restart    from '../../widgets/ui/RestartUI'
import Speed      from '../../widgets/ui/SpeedUI'
import Timer      from '../../widgets/ui/TimerUI'
import Repeat     from '../../widgets/ui/RepeatUI'
import Volume     from '../../widgets/ui/VolumeUI'
import Fullscreen from '../../widgets/ui/FullscreenUI'

import { 
    StyleSheet,
    ActivityIndicator
} from 'react-native'

class PlayerC extends Component {
    state = {
        loading : true,
        paused  : false,
        elapsed : '00:00',
        duration: '00:00',
        repeat  : false,
        playRate: 1,
        volume  : 1
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({ lodaing: isBuffering })
    }
    onLoad = ( info ) => {
        this.setState({
            loading: false,
            duration: ('0'+ ~~( info.duration / 60 )).substr(-2) + ':' + ('0'+ ~~( info.duration % 60 )).substr(-2)
        })
    }
    setRefVideo = ( el ) => {
        this.video = el
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    onRestart = () => {
        this.video.seek(0)
    }
    onProgress = ( info ) => {
        this.setState({
            elapsed: ('0'+ ~~( info.currentTime / 60 )).substr(-2) + ':' + ('0'+ ~~( info.currentTime % 60 )).substr(-2)
        })
    }
    onEnd = ( info ) => {
        this.video.seek(0)
        var elapsed = this.state.duration
        if( this.state.repeat ){
            elapsed = '00:00' 
        } else {
            this.setState({ paused: true })
        }
        this.setState({
            elapsed
        })
    }
    onRepeat = () => {
        const repeat = !this.state.repeat
        this.setState({
            repeat
        })
    }
    onSpeed = ( dir ) => {
        var playRate = this.state.playRate
            playRate += dir == '-' ? -.5 : .5
        this.setState({
            playRate
        })
    }
    onVolume = () => {
        var volume = this.state.volume + 0.5
        var muted  = this.state.muted
        if( volume > 1 ){
            volume = 0
            muted = true
        } else {
            muted = false
        }
        this.setState({  
            volume,
            muted
        })
    }
    render () {
        return(
            <Layout
                loading    = { this.state.loading }
                fullscreen = { this.props.fullscreen }
                playRate   = { this.state.playRate }
                video = {
                    <Video
                        ref = { this.setRefVideo }
                        source     = { {
                            uri: 'https://noesishosting.com/drive/videos/minecraft-indi.mp4'
                            //uri: 'https://noesishosting.com/drive/videos/minecraft-coco.mp4' 
                            //uri: 'https://player.vimeo.com/external/121181631.hd.mp4?s=747c09089b9c786ecea7d4a2eed7714c2ecb4918&profile_id=119&oauth2_token_id=57447761&download=1'
                        } }
                        style      = { styles.video }
                        resizeMode = { this.props.fullscreen ? 'contain' : 'cover' }
                        onBuffer   = { this.onBuffer }
                        onLoad     = { this.onLoad }
                        onProgress = { this.onProgress }
                        onEnd      = { this.onEnd }
                        muted      = { this.state.muted }
                        paused     = { this.state.paused }
                        repeat     = { this.state.repeat }
                        rate       = { this.state.playRate }
                        volume     = { this.state.volume }
                    />
                }
                loader = {
                    <ActivityIndicator color='white' size='large'/>
                }
                controls =  {
                    <ControlLayout>
                        <Restart 
                            onPress = { this.onRestart }
                        />
                        <Speed
                            onPressL = { this.onSpeed.bind(this, '-') }
                            onPressR = { this.onSpeed.bind(this, '+') }
                            speed   = { this.state.playRate }
                        />
                        <PlayPause
                            onPress = { this.playPause }
                            paused  = { this.state.paused }
                        />
                        <Timer
                            elapsed  = { this.state.elapsed }
                            duration = { this.state.duration }
                        />
                        <Repeat 
                            onPress = { this.onRepeat }
                            repeat  = { this.state.repeat }
                        />
                        <Volume
                            onPress = { this.onVolume }
                            volume  = { this.state.volume }
                            muted   = { this.state.muted }
                        />
                        <Fullscreen 
                            onPress    = { this.props.onFullscreen }
                            fullscreen = { this.props.fullscreen }
                        />
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    player: {
        flex: 1
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