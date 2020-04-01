import React, { Component } from 'react'
import {
    SafeAreaView,StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,
  } from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { AsyncStorage } from "react-native"

export default class Home extends Component {
    render() {
        return (
        <SafeAreaView>
            <ScrollView>
            {/* 顶部 */}
            <View style={{backgroundColor:'red',flexDirection:'row',height:60}}>
              {/* 搜索框 */}
              <View style={styles.sousuo}>
                  <Image style={{width:20,height:20,marginTop:10,marginLeft:20}} source={require('./搜索.png')}/>
                  <TextInput style={{width:350,height:40}} placeholderTextColor="white" placeholder="请输入您要搜索的关键字"/>
              </View>
              <Image style={{width:30,height:30,marginTop:12,marginLeft:20}} source={require('./buy.png')}/>
            </View>
            {/* 轮播 */}
            <Swiper style={styles.wrapper} showsButtons={false} autoplay={true}>
                <View style={styles.slide1}>
                    <Image style={{width:'100%'}} source={require('./服务_01.jpg')}/>
                </View>
                <View style={styles.slide2}>
                  <Image style={{width:'100%'}} source={require('./服务_02.jpg')}/>
                </View>
                <View style={styles.slide3}>
                  <Image style={{width:'100%'}} source={require('./服务_01.jpg')}/>
                </View>
            </Swiper>
            {/* 四栏 */}
            <View style={styles.box}>
              <Image style={{borderRadius:50,height:80,width:80}} source={require('./服务_05.jpg')}/>
              <Text style={styles.font1}>居家维修保养</Text>
              <Icon color='#949494' size={28} style={{marginLeft:120,marginTop:30}}name='right'/>
            </View>
            <View style={styles.box}>
              <Image style={{borderRadius:50,height:80,width:80}} source={require('./服务_08.jpg')}/>
              <Text style={styles.font1}>住宿优惠</Text>
              <Icon color='#949494' size={28} style={{marginLeft:160,marginTop:30}}name='right'/>
            </View>
            <View style={styles.box}>
              <Image style={{borderRadius:50,height:80,width:80}} source={require('./服务_10.jpg')}/>
              <Text style={styles.font1}>出行接送</Text>
              <Icon color='#949494' size={28} style={{marginLeft:160,marginTop:30}}name='right'/>
            </View>
            <View style={styles.box}>
              <Image style={{borderRadius:50,height:80,width:80}} source={require('./服务_12.jpg')}/>
              <Text style={styles.font1}>E族活动</Text>
              <Icon color='#949494' size={28} style={{marginLeft:165,marginTop:30}}name='right'/>
            </View>
            {/* 底部 */}
            <View style={{marginTop:20,alignItems:"center",justifyContent:'center'}}>
            <Button 
                style={{
                    width:380,height: 40,
                    borderRadius: 20,
                    textAlignVertical: 'center',
                    backgroundColor:'red',
                    color: '#fff'
                }}
            >发布需求</Button>
              <Text style={styles.t1}>@E族之家 版权所有</Text>
            </View>
            </ScrollView>
        </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    sousuo:{
      width:'80%',
      height:40,
      marginTop:10,
      marginLeft:20,
      backgroundColor:'#fbb8b8',
      borderRadius:20,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    wrapper:{
      height:200,
    },
    box:{
      marginTop:10,
      paddingLeft:20,
      paddingTop:5,
      paddingBottom:10,
      flexDirection:'row',
      backgroundColor:'white',
      height:90
    },
    font1:{
      fontSize:20,
      marginLeft:30,
      marginTop:30
    },
    t1:{
      color:'grey',
      marginTop:20,
      marginBottom:20
    }
  });
  