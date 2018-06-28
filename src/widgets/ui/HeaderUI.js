import React from  'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView, // para evitar conflictos con el notch de iPhoneX o similares
} from 'react-native'

function HeaderUI( props ){
    return(
        <View>
            <SafeAreaView>
            <View style = { styles.container }>
                <Image
                    source = { require('../../../assets/logo.png') }
                    style  = { styles.logo }
                />
                <View
                    style = { styles.right }
                >
                    { props.children }
                </View>
            </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo :{
        width: 80,
        height: 26,
        resizeMode: 'contain',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 10
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'green'
    }
})

export default HeaderUI