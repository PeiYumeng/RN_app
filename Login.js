import React, { Component } from 'react'
import {
    StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,ToastAndroid,ProgressBarAndroid,Alert
  } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';
import { AsyncStorage } from "react-native"

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            wait:false,
        }
    }
    username = (text)=>{
        this.setState({username:text})
    }
    pwd = (text)=>{
        this.setState({pwd:text})
    }
    log=()=>{
        if(this.state.username==='' | this.state.pwd===''){
            Alert.alert(
                '登陆失败',
                '请您输入用户名和密码！',
                [
                  {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: '好的', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }else{
            this.setState({wait:true})
            fetch('https://www.fastmock.site/mock/087091b65b6389ba20c3567232d4d221/api/user',{
                method:'POST',
                headers:{
                    "Accept":'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({name:this.state.username,pwd:this.state.pwd})
            })
                .then(res=>res.json())
                .then(res=>{
                    { 
                        if(res.data.desc==='1'){
                            ToastAndroid.show('没有该用户', ToastAndroid.SHORT,ToastAndroid.top);
                            this.setState({wait:false})
                        }
                        if(res.data.desc==='2'){
                            ToastAndroid.show('密码输入错误', ToastAndroid.SHORT,ToastAndroid.top);
                            this.setState({wait:false})
                        }
                        if(res.data.desc==='成功'){
                            this.setState({wait:false})
                            AsyncStorage.setItem('user',`${this.state.username}`)
                            // .then(  //检验存储
                            //     AsyncStorage.getItem('user')
                            //     .then(res=>{
                            //         let user = JSON.parse(res)
                            //         console.log('user'+user)
                            //     })
                            // )
                            ToastAndroid.show('登陆成功 !', ToastAndroid.SHORT);
                            Actions.home();
                        }
                    }
                });
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <View>
                    <Text style={{paddingLeft:'45%',paddingTop:20,fontSize:20}}>登录吧</Text>
                </View>
                {/* 登陆 */}
                <View style={styles.b1}>
                    <Text>用户名：</Text>
                    <TextInput
                        style={styles.in1}
                        onChangeText={this.username}
                        placeholder="用户名" 
                    />
               </View> 
               <View style={styles.b1}>
                    <Text> 密   码：</Text>
                    <TextInput
                        style={styles.in1}
                        onChangeText={this.pwd}
                        placeholder="密码" 
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.b1}>
                    <Button style={styles.btn} onPress={this.log}>登陆</Button>
                </View>
                {/* 跳转注册 */}
                <View style={styles.b2}>
                    <Text>没有注册？</Text>
                    <Button style={styles.btn} onPress={()=>Actions.reg()}>戳我注册</Button>
                </View>
                {/* 等待 */}
                {
                    this.state.wait==true?(
                        <ProgressBarAndroid
                            style={{position:'absolute',top:300,left:200}}
                            styleAttr='Inverse' color='#FF4500'
                        />
                    ):(null)
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    btn:{
        color:'blue',
        width:120,
        height:40,
        borderRadius:20,
        color:'white',
        textAlign:'center',
        backgroundColor:'#7D7DFF',
        paddingTop:7
    },
    in1:{
        width:'80%',
        height:40,
        borderRadius:10,
        borderColor:'grey',
        borderWidth:1
    },
    b1:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:70,
    },
    b2:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:70,
    }
})