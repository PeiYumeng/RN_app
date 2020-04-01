import React, { Component } from 'react'
import {
    SafeAreaView,StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,
    ToastAndroid,Alert,ProgressBarAndroid,TouchableOpacity
  } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/AntDesign';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal, ActionConst} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import WaitModal from './WaitModal'

export default class Regist extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
            tel:'',
            pwd2:'',
            wait:false,
        }
    }
    username = (text)=>{
        this.setState({username:text})
    }
    tel = (text)=>{
        this.setState({tel:text})
    }
    pwd = (text)=>{
        this.setState({pwd:text})
    }
    pwd2 = (text)=>{
        this.setState({pwd2:text})
    }
    add=()=>{
        if(this.state.username==='' | this.state.tel==='' | this.state.pwd==='' | this.state.pwd2===''){
            Alert.alert(
                '注册失败',
                '输入值不能为空！',
                [
                  {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: '好的', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
            console.log(this.state.username)
        }
        else if(this.state.pwd!==this.state.pwd2){
            Alert.alert(
                '注册失败',
                '两次输入密码不同！',
                [
                  {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: '好的', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }
        else{
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
                       console.log(res.data.desc);
                       if(res.data.desc==='1'){
                        ToastAndroid.show('账户已存在', ToastAndroid.SHORT,ToastAndroid.top);
                        this.setState({wait:false})
                       }
                       if(res.data.desc==='2'){
                        ToastAndroid.show('网络原因注册失败', ToastAndroid.SHORT,ToastAndroid.top);
                        this.setState({wait:false})
                       }
                       if(res.data.desc==='成功'){
                        this.setState({wait:false})
                        Actions.pop();
                       }
                    }
                });
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
            {/* 返回登录页 */}
            <View style={{paddingTop:20,flexDirection:'row',}}>
                <Icon  onPress={()=>Actions.pop()}
                    size={28}
                    name='left'/>
                <Text style={{paddingLeft:'38%',fontSize:20}}>注册呀</Text>
            </View>
            <View style={styles.bg}>
            {/* 等待 */}
            {
                this.state.wait==true?(
                    <ProgressBarAndroid
                        style={{position:'absolute',top:300,left:200}}
                        styleAttr='Inverse' color='#FF4500'
                    />
                ):(null)
            }
            {/* 登陆 */}
            <View style={styles.b1}>
                <Icon style={{marginRight:20}} size={28} name='meh'/>
                <TextInput
                    style={styles.in1}
                    onChangeText={this.username}
                    placeholder="请设置用户名" 
                />
            </View>
            <View style={styles.b1}>
            <Icon style={{marginRight:20}} size={28} name='phone'/>
                <TextInput
                    style={styles.in1}
                    onChangeText={this.tel}
                    placeholder="手机号" 
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.b1}>
            <Icon style={{marginRight:20}} size={28} name='pushpino'/>
                <TextInput
                    style={styles.in1}
                    onChangeText={this.pwd}
                    placeholder="密码" 
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.b1}>
            <Icon style={{marginRight:20}} size={28} name='pushpin'/>
                <TextInput
                    style={styles.in1}
                    onChangeText={this.pwd2}
                    placeholder="再次输入密码" 
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.b1}>
                <Button style={styles.btn} onPress={()=>this.add()}>注册</Button> 
            </View>
            </View>
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
        paddingTop:7,
    },
    in1:{
        width:'75%',
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
    bg:{
        width:'90%',
        height:'70%',
        borderRadius:20,
        borderWidth:1,
        borderColor:'grey',
        marginLeft:'5%',
        marginTop:10,
    },
    btn2:{
        width:40,
		height:40,
		// borderWidth: 1,
		// borderColor:'#ccc',
	    alignItems:"center",
		justifyContent:'center',
        borderRadius:20,
        position:'absolute',
        marginTop:10
    }
})