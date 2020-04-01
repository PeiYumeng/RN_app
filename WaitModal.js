import React, { Component } from 'react'
import {
    SafeAreaView,StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,ToastAndroid,Alert,ProgressBarAndroid,
  } from 'react-native';

export default class WaitModal extends Component {
    render() {
        return (
            <View style={styles.box}>
                <ProgressBarAndroid
                    styleAttr='Inverse' color='#FF4500'
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        alignItems:'center',
        justifyContent:'center',
        opacity:0.5
    }
})
