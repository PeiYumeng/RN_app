import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,StyleSheet,ScrollView,TextInput,FlatList,Image,View,Text,
  StatusBar,ImageBackground,TouchableOpacity,Dimensions,PixelRatio,BackHandler,
  ToastAndroid
} from 'react-native';
import {Router, Overlay, Scene, Tabs, Drawer, Lightbox, Modal} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
// import { Grid, Icon } from '@ant-design/react-native';
import Me from './Me.js'
import Home from './Home'
import List from './List'
import Publish from './Publish'
import {Actions} from 'react-native-router-flux';
import Box from './Box'
import Start from './Start'
import { AsyncStorage } from "react-native"
import SplashScreen from 'react-native-splash-screen';
import Login from './Login'
import Regist from './Regist'
import WaitModal from './WaitModal'

console.disableYellowBox = true;

const App = () => {
	let [isLogin,setLogin] = useState(false);//登陆部分
	let [isInstall,setInstall] = useState(true);//判断启动页
	let init = ()=>{
		AsyncStorage.getItem('isInstall')
		.then(res=>{
			console.log('isinstall',res)
			if(res){//如果安装过了就不再显示启动页了
				setInstall(false);
			}
		})
		AsyncStorage.getItem('user')
		.then(res=>{
			let user = JSON.parse(res)
			console.log('user'+user)
			if(user==null){
				SplashScreen.hide();
			}
			else{
				console.log('user'+user)
				setLogin(true);
			    SplashScreen.hide();
			}
		})
	}
	useEffect(()=>{
		init();
	},[])
	let afterInstall = ()=>{
		console.log('after install')
		setInstall(false)
	}
	if(isInstall){
		return <Start afterInstall={afterInstall}/>
	}
	console.log('isLogin'+isLogin)
	let now = 0;
  return (
    <Router 
		backAndroidHandler={()=>{
				if(Actions.currentScene != '_home' && Actions.currentScene != 'login'){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('退出应用',100);
						now = new Date().getTime();
						return true;
					}
				}			
			}}
	>
	<Modal  hideNavBar hideDrawerButton>
	 <Overlay>
	  <Lightbox key="box">
		<Scene key="root">
			<Tabs 
				key='tabbar'
				hideNavBar
				hideDrawerButton
				activeTintColor="red"
				inactiveTintColor="#949494"
				tabBarStyle={{backgroundColor:'#ccc'}}
			>
			{/* 首页 */}
			<Scene 
				key='home'
				hideNavBar
				hideDrawerButton
				icon={({focused})=>
				<Icon 
						color={focused?'red':'#949494'} 
						size={28}
						name='home'/>}
				title="首页"
				component={Home}
			/>
			{/* 精品分类 */}
			<Scene 
					key='good'
					hideNavBar
					hideDrawerButton
					icon={({focused})=>
						<Icon 
						color={focused?'red':'#949494'} 
						size={28}
						name='plus'/>}
					title="精品分类"
					component={List}
				/>
			{/* 购物车 */}
			<Scene 
					key='buy'
					hideDrawerButton
					hideNavBar
					icon={({focused})=>
						<Icon 
							color={focused?'red':'#949494'} 
							size={28}
							name='shoppingcart'/>}
					title="购物"
					component={List}
				/>
				{/* 个人中心 */}
				<Scene 
					key='me'
					hideDrawerButton
					hideNavBar
					icon={({focused})=>
						<Icon 
							color={focused?'red':'#949494'} 
							name='user'
							size={25}
							/>}
					title="个人中心"
					// component={Me}
				>
					<Scene 
						key='me'
						hideDrawerButton
						hideNavBar
						component={Me}
					/>
					<Scene 
						key='publish'
						hideDrawerButton
						hideNavBar
						component={Publish}
					/>
				</Scene>
			</Tabs>
		</Scene>
	  </Lightbox>
	  </Overlay>
			<Scene initial={!isLogin} key="login" component={Login}/>
			<Scene key='reg' component={Regist}/>
	  </Modal>
    </Router>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
