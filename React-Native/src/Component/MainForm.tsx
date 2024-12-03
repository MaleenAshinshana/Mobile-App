import React, {useRef, useState} from 'react';
import {SafeAreaView,
        Text,
        StyleSheet, Image, Button, View, TouchableOpacity, Alert,Animated} from 'react-native';


// @ts-ignore
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
// @ts-ignore
import  leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
// @ts-ignore
import  rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
// @ts-ignore
import  mainImg from  'D:/Mobile/tea_product_mobile/src/assect/AdobeStock_163248948.jpg';
// @ts-ignore
import  banner1 from 'D:/Mobile/tea_product_mobile/src/assect/banner1.1.png';
// @ts-ignore
import  banner2 from 'D:/Mobile/tea_product_mobile/src/assect/banner1.2.png';
// @ts-ignore
import  userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';





const MainForm = ({navigation}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;


    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);

        Animated.timing(slideAnim, {
            toValue: isMenuVisible ? -250 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const handleMenuClick = () => {

        toggleMenu();
    };


  return (
    <SafeAreaView style={styles.safeArea} >
        <TouchableOpacity style={styles.menu} onPress={handleMenuClick}>
            <Image source={menusImage} style={styles.menuImg} />
        </TouchableOpacity>

        <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
            <Text>Menu Content</Text>
            <View style={styles.leftSideView}></View>
        </Animated.View>

        <Text style={styles.evText} >Evergreen</Text>
        <Image source={leftArrow} style={styles.leftAro} />
        <Text style={styles.orText}>ORGANICTEA</Text>
        <Image source={rightArrow} style={styles.rightAro}/>
        <Image source={mainImg} style={styles.mainImg}/>
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => alert('Ok!')}>
                <Text style={styles.buttonText}>SHOP NOW</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card}>
           <Image source={banner1} style={styles.banner1}/>
            <Text style={styles.banner1Text}>Matcha</Text>
            <Text style={styles.bannerText1_1}> Powder Natura</Text>
            <TouchableOpacity style={styles.banner1Button} onPress={() => alert('Ok!')}>
                <Text style={styles.banner1ButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.card2}>
            <Image source={banner2} style={styles.banner2}/>
            <Text style={styles.banner2Text}>100% Organic</Text>
            <TouchableOpacity style={styles.banner2Button} onPress={() => alert('Ok!')}>
                <Text style={styles.banner2ButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.bottomBar}>
            {/*<TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
                <Image source={userPng} style={styles.userPngS}/>
            </TouchableOpacity>*/}
           {/* <Image source={userPng} style={styles.userPngS}/>*/}

            <TouchableOpacity style={styles.userPng}
                onPress={() => navigation.navigate("Login")}>
                <Image source={userPng} style={styles.userPngS} />
            </TouchableOpacity>


        </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
      height: '100%',
  },
    menu:{
      position: 'absolute',
        left: 0,
        top: 0,
    },
  menuImg: {
      width: 50,
      height: 50,
      resizeMode: 'cover',
      position:'absolute',
      left : 0,
      top : 0,
    },
    menuO:{
      backgroundColor: 'blue',

    },
    leftSideView:{
      width:'200%',
        height:'3000%',
        backgroundColor:'black',
        position:'absolute',
        left:0,
       

    },
    evText:{
      fontSize: 40,
        fontWeight: 'bold',
        color: '#A0AF78',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        margin:"auto",



    },
    leftAro:{
      width: 30,
        height:30,
        position:'absolute',
        left:110,
        top:45,
    },
    orText:{
      fontWeight: 'bold',
        color: '#862D2D',
        textAlign: 'center',
        position: 'absolute',
        top: 50,
    },
    rightAro:{
        width: 30,
        height:30,
        position:'absolute',
        right:110,
        top:45,
    },
    mainImg:{
      width:395,
      height:220,
        position:'absolute',
        top:100,
        borderBottomRightRadius:130,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 20 }, // Increased height offset
        shadowOpacity: 0.8,
        shadowRadius: 20, // Increased shadow radius
        elevation: 20,
    },
    btnMShop:{
      width:100,
        height:30,
        backgroundColor:'blackBright',
        position:'absolute',
        top:10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        backgroundColor: 'transparent',
        padding: 10,
        borderRadius: 5,
        borderWidth:2,
        width: 220,
        height: 50,
        position: 'absolute',
        bottom: 330,
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
    },
    card: {
      width: '90%',
        height: '18%',
        backgroundColor: '#f0f0f5',
        opacity:1,
        position: 'absolute',
        bottom: 220,
        borderRadius: 30,
    },
    banner1:{
      width: '100%',
        height: '100%',
    },
    banner1Text:{
      fontWeight: 'normal',
        color: 'black',
        fontSize : 20,
        position: 'absolute',
        left: 33,
        top: 20,
    },
    bannerText1_1:{
      color: 'black',
        fontSize : 20,
        position: 'absolute',
        left: 0,
        top: 45,
    },
    banner1Button:{
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        borderWidth:2,
        width: 110,
        height: 35,
        position: 'absolute',
        bottom: 10,
        left: 20,
    },
    banner1ButtonText:{
      color: 'white',
      textAlign: 'center',
        fontSize: 10
    },
    card2: {
        width: '90%',
        height: '18%',
        backgroundColor: '#f0f0f5',
        opacity:1,
        position: 'absolute',
        bottom: 50,
        borderRadius: 30,
    },
    banner2:{
        width: '100%',
        height: '100%',
    },
    banner2Text:{
        fontWeight: 'normal',
        color: 'black',
        fontSize : 20,
        position: 'absolute',
        left: 20,
        top: 20,
    },
    bannerText2_1:{
        color: 'black',
        fontSize : 20,
        position: 'absolute',
        left: 10,
        top: 45,
    },
    banner2Button:{
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        borderWidth:2,
        width: 110,
        height: 35,
        position: 'absolute',
        bottom: 10,
        left: 20,
    },
    banner2ButtonText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 10
    },
    bottomBar:{
      width: '100%',
        height:35,
        backgroundColor:'black',
        position: 'static',
        bottom:0,

    },
    userPngS:{
      width: 25,
        height: 25,
        position: 'relative',
        left: 0,
        top:0,

    },
    userPng : {
      borderStyle : "solid",
        borderWidth : 2,
        borderColor : "transparent",
        width:40,
        position : "absolute",
        right : 0,
        top :0,

    },
});

export default MainForm;

