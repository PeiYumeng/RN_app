import React, { Component } from 'react'
import {
    SafeAreaView,StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,
    StatusBar,ImageBackground,TouchableOpacity,Dimensions,PixelRatio,BackHandler,
    ToastAndroid
  } from 'react-native';

export default class List extends Component {
    render() {
        return (
        <SafeAreaView>
            <ScrollView>
            {/* 搜索框 */}
            <View style={styles.sousuo}>
                <TextInput style={{width:350,height:40}} placeholderTextColor="grey"  placeholder="请输入商品名称"/>
                <Image style={{width:15,height:15,marginTop:10,marginRight:30}} source={require('./搜索.png')}/>
            </View>
            {/* 五栏 */}
            <View style={styles.box1}>
                <View style={styles.box1_1}>
                <Text style={{color:'red'}}>综合</Text>
                </View>
                <View style={styles.box1_1}>
                <Text>销量</Text>
                </View>
                <View style={styles.box1_1}>
                <Text>新品</Text>
                </View>
                <View style={styles.box1_1}>
                <Text>价格</Text>
                </View>
                <View style={styles.box1_1}>
                <Text>信用</Text>
                </View>
            </View>
            {/* 薯片列表 */}
            <View style={{flexDirection:'row',
                flexWrap:'wrap',
                justifyContent:'space-evenly',
                backgroundColor:'#DCDCDC',
            }}>
                <View style={styles.box2}>
                    <Image style={styles.img1}source={require('./shanghaojia1.jpg')}/>
                    <Text style={styles.font2}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.img2}  source={require('./shanghaojia2.jpg')}/>
                    <Text style={styles.font2}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.img1}source={require('./shanghaojia1.jpg')}/>
                    <Text style={styles.font2}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.img2} source={require('./shanghaojia2.jpg')}/>
                    <Text style={styles.font2}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.img1}source={require('./shanghaojia1.jpg')}/>
                    <Text style={styles.font2}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{color:'red',marginTop:10}}>36.00</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.img2} source={require('./shanghaojia2.jpg')}/>
                    <Text style={styles.font2}>Oishi/上好佳玉米卷20包膨化休闲食品Oishi/上好佳</Text>
                    <Text style={{color:'red',marginTop:10}}>36.00</Text>
                </View>
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
      marginLeft:50,
      backgroundColor:'#eeeeee',
      borderRadius:2,
      flexDirection:'row',
      justifyContent:'space-between',
    },
    box1:{
      height:60,
      flexDirection:'row',
      justifyContent:'space-evenly',
    },
    box1_1:{
      width:40,
      justifyContent:'center',
      alignItems:'center',
    },
    font1:{
      textAlign:'center',
      paddingLeft:55
    },
    box2:{
      width:'45%',
      height:230,
      backgroundColor:'white',
      // alignItems:'center',
      paddingLeft:15,
      marginTop:20
    },
    img1:{
      marginLeft:'17%',
      marginTop:20,
      marginBottom:20,
      width:100,
      height:120
    },
    img2:{
      marginLeft:'15%',
      marginTop:20,
      marginBottom:20,
      width:120,
      height:120
    },
    font2:{
      color:'grey'
    }
  });
  