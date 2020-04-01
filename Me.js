import React, { Component } from 'react'
import {
    StyleSheet,Image,View,Text,Dimensions,
  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import {Actions} from 'react-native-router-flux';
import { AsyncStorage } from "react-native"

const options = {
  title: '选择图片',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'从图库选择',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class Me extends Component {
  constructor(){
    super();
    console.log(Dimensions.get('window'));
    var a;
    this.state = {
      imageUrl: require('./head.jpg')
    }
    AsyncStorage.getItem('uri').then((res)=>{
      console.log(res);
      if(res!==null){
        const source = { uri: res};
        this.setState({
          imageUrl: source,
        })
      }
    })
  }
  ex=()=>{
    // Actions.replace('login');
    AsyncStorage.removeItem('user')
    Actions.reset('login');
    // Actions.login();
  }
  takephoto = ()=>{
    ImagePicker.showImagePicker(options, (response) => {
        if (response.didCancel) {
          return;
        } else if (response.error) {
          console.log('Error:', response.error);
        } else if (response.customButton) {
          console.log('custom:', response.customButton);
        } else {
          const source = { uri: response.uri };
          AsyncStorage.setItem('uri',response.uri)
          this.setState({
            imageUrl: source,
          },function(){
            console.log(source)
          });
        }
      });
}
    render() {
        return (
          <View>
            {/* 头像 */}
            <View style={styles.box1}>
              <Button  onPress={()=>{this.takephoto()}}
                    style={styles.btn}>
                  <Image id="touxiang"
                    style={[styles.touxiang,styles.t1]}
                    source={this.state.imageUrl}
                />
              </Button>
                <Text style={styles.font1}>BINNU DHILLON</Text>
            </View>
            {/*  我的个人中心*/}
              <View style={styles.box3}>
              <Icon 
                color='#949494'
                size={28}
                name='meh'/>
                <Text style={{marginTop:6,marginLeft:12}}>我的个人中心</Text>
              </View>
              {/* 第一个布局格 */}
            <View style={styles.box2}>
              <View style={styles.box}>
              <Icon color='#949494' size={28} name='like1'/>
                <Text>账户管理</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='like1'/>
                <Text>收货地址</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='like1'/>
                <Text>我的信息</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='switcher'/>
                <Text>我的订单</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='qrcode'/>
                <Text>我的二维码</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='gift'/>
                <Text>我的积分</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='staro'/>
                <Text>我的收藏</Text>
              </View>
            </View>
            {/* 一小栏灰栏 */}
            <View style={{height:10}}></View>
            {/* 第二栏布局 */}
            <View style={styles.box3}>
              <Icon  color='#949494' size={28} name='rocket1'/>
                <Text style={{marginTop:6,marginLeft:12}}>E族活动</Text>
              </View>
            <View style={styles.box2}>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='like1'/>
                <Text>居家维修保养</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='like1'/>
                <Text>出行接送</Text>
              </View>
              <View style={styles.box}>
              <Icon color='#949494' size={28} name='like1'/>
                <Text>我的受赠人</Text>
              </View>
              <View style={styles.box}>
              <Icon color='#949494' size={28} name='switcher'/>
                <Text>我的住宿优惠</Text>
              </View>
              <View style={styles.box}>
              <Icon  color='#949494' size={28} name='qrcode'/>
                <Text>我的活动</Text>
              </View>
              <View style={styles.box}>
                <Button onPress={()=>{Actions.publish()}}>
                  <Icon  color='#949494' size={28} name='gift'/>
                </Button>
                <Button onPress={()=>{Actions.publish()}}>
                  <Text>我的发布</Text>
              </Button>
              </View>
            </View>
            {/* 结尾 */}
            <View style={{height:30,alignItems:"center",justifyContent:'center',}}>
              {/* <Text style={styles.font2}>BINNU DHILLON | 退出</Text> */}
              <View style={styles.b1}>
                <Button style={styles.btn2} onPress={this.ex}>退出登录</Button> 
            </View>
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
  box1:{
    height:280*0.75,
    backgroundColor:'red',
    alignItems:"center",
    justifyContent:'center',
  },
  touxiang:{
    width:150*0.75,
    height:150*0.75,
    borderRadius:60,
    // transform: [{rotateZ:'90deg'}]
  },
  t1:{
    transform: [{rotateZ:'90deg'}]
  },
  font1:{
    color:'white',
    fontSize:20
  },
  box:{
		width:"30%",
		height:70,
    alignItems:"center",
    justifyContent:'center',
  },
  box2:{
    flexDirection:'row',
    justifyContent:"space-between",
    flexWrap:'wrap',
    borderTopWidth:1,
    borderTopColor:'#949494',
    backgroundColor:'white'
  },
  font2:{
    // color:'#949494',
    textAlign:'center',
  },
  box3:{
    flexDirection:'row',
    paddingLeft:20,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'white'
  },
  btn:{
    position:"absolute",
    borderColor:'red',
  },
  b1:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:70,
  },
  btn2:{
    // color:'red',
    width:120,
    height:40,
    borderRadius:20,
    color:'white',
    textAlign:'center',
    backgroundColor:'#c85d44',
    paddingTop:7,
    marginLeft:'30%'
  },
});
  