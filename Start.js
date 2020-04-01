import React, { Component } from 'react'
import {
    SafeAreaView,StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,TouchableOpacity,Button
  } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
// import Button from 'react-native-button';
import { AsyncStorage } from "react-native"

export default class Start extends Component {
    begin=  () => {
        AsyncStorage.setItem('isInstall','true',()=>{
            this.props.afterInstall();
        });
    };
    render() {
        return (
            <View style={styles.box}>
                {/* 轮播 */}
                <Swiper style={styles.wrapper} autoplay={true}  showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image style={{width:'100%',height:'100%'}} source={require('./qi1.jpg')}/>
                    </View>
                    <View style={styles.slide2}>
                        <Image style={{width:'100%',height:'100%'}} source={require('./qi2.jpg')}/>
                    </View>
                    <View style={styles.slide3}>
                        <Image style={{width:'100%',height:'100%'}} source={require('./qi3.jpg')}/>
                    </View>
                </Swiper>
                {/* 开始 */}
                {/* <Button style={styles.btn} title="开始体验"/> */}
                <TouchableOpacity style={styles.btn}  onPress={this.begin}>
                    <Text style={{color: '#fff'}}>开始体验</Text>
                </TouchableOpacity>
            </View> 
        )
    }
}
const styles = StyleSheet.create({
    box:{
        flex:1,
        position:'relative',
    },
    btn:{
        color:'white',
        backgroundColor:'blue',
        width:100,
        position:'absolute',
        top:20,
        left:160,
        width:150,
        height:40,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
})