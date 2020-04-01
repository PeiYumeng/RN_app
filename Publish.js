import React, { Component } from 'react'
import {
    StyleSheet,Image,View,Text,Dimensions,FlatList,ToastAndroid,
  } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class Publish extends Component {
    constructor(){
        super();
        this.state = {
            num:1,//页数
            da:[],//全部数据
        };
        console.log('constructor')
    }
    componentDidMount(){
        this.get_context();
    }
    get_context(){
        console.log(this.state.num)
        var data=[];
        fetch('https://cnodejs.org/api/v1/topics?page='+this.state.num+'&limit=13')
        .then(res=>res.json())
        .then(res=>{
            for(var i=0;i<res.data.length;i++){
                var obj={
                    title:'',
                    time:'',
                    replay:'',
                    color:'',
                }
                //限制title长度
                if(res.data[i].title.length>15){
                    var str=res.data[i].title;
                    obj.title=str.substring(0,15)+'...';
                }else{
                    obj.title=res.data[i].title
                }
                //时间分割
                obj.time = res.data[0].create_at.substring(0,10);
                //回不回复
                var p = Math.round(Math.random());
                if(p){
                    obj.replay = '已回复',
                    obj.color='black'
                }else{
                    obj.replay = '待回复',
                    obj.color='red'
                }
                data[i] = obj;
                // console.log(data[i])
            }
            this.setState({tits:res.data})
            this.setState({da: data});
        })
        // console.log(this.state.num)
    }
    change_page1(){
        if(this.state.num===1){
            ToastAndroid.show('已经是第一页了哦 !', ToastAndroid.SHORT);
        }else{
            var page =this.state.num-1;
            this.setState({num:page},function(){this.get_context()})
        }
    }
    change_page2(){
        console.log('c'+this.state.num)
        var page =this.state.num+1;
        console.log('page'+page)
        this.setState({num:page},function(){console.log('p'+this.state.num);this.get_context()})
    }
    render() {
        return (
            <View>
                {/* 头部 */}
                <View style={{backgroundColor:'red',flexDirection:'row',paddingTop:13,paddingLeft:10,height:60}}>
                    <Icon onPress={()=>Actions.pop()} color="white" size={30} name="left"/>
                    <Text style={styles.t1}>我的发布</Text>
                    <Icon color="white" style={{marginTop:2}} size={30} name="bars"/>
                </View>
                {/* 列表 */}
                <View style={styles.b1}>
                    {
                        this.state.da.map((item)=>(
                            <View style={styles.b2}>
                                <Text>{item.title}</Text>
                                <View style={styles.b3}>
                                    <Text>{item.time}</Text>
                                    <Text style={{color:item.color,marginLeft:15}}>{item.replay}</Text>
                                </View>
                            </View>
                        ))
                    }
                </View>
                {/* 换页 */}
                <View style={styles.b4}>
                    <Button  onPress={()=>{this.change_page1()}}
                        style={styles.btn1}>
                        上一页
                    </Button>
                <Text>第{this.state.num}页</Text>
                    <Button  onPress={()=>{this.change_page2()}}
                        style={styles.btn2}>
                        下一页
                    </Button>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    t1:{
        color:'white',
        fontSize:25,
        marginLeft:150,
        marginRight:150
    },
    b1:{
        width:"100%",
        height:580,
        // backgroundColor:'blue',
        position:"relative",
        overflow:'hidden',
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10
    },
    b2:{
        paddingBottom:10,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:'grey',
        fontSize:17,
        height:40,
        flexDirection:'row',
    },
    b3:{
        paddingBottom:10,
        paddingTop:10,
        flexDirection:'row',
        position:'absolute',
        right:0
    },
    btn1:{
        marginRight:80,
        backgroundColor:'red',
        color:'white',
        width:80,
        borderRadius:10
    },
    btn2:{
        marginLeft:80,
        backgroundColor:'red',
        color:'white',
        width:80,
        borderRadius:10,
    },
    b4:{
        justifyContent:'center',
        flexDirection:'row',
    }
});
    