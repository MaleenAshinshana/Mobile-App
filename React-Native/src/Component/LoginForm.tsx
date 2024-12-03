import {
    Alert,
    Animated,
    Button,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import React, {useEffect, useRef, useState} from "react";
// @ts-ignore
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
// @ts-ignore
import  leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
// @ts-ignore
import  rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
// @ts-ignore
import  userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';

import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginForm = ({navigation}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //const [userData, setUserData] = useState(null);
    const [userData, setUserData] = useState({ username: '', password: '' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await AsyncStorage.getItem('userData');
                if (data !== null) {
                    setUserData(JSON.parse(data));
                }
            } catch (error) {
                Alert.alert('Error', 'Failed to retrieve registration data.');
            }
        };

        fetchData();
    }, []);

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
    const handleRegister = async () => {
        const userData = { username, email, password };
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            Alert.alert('Success', 'Registration data saved successfully!');
        } catch (error) {
            Alert.alert('Error', 'Failed to save registration data.');
        }
    };
    const handleLogin = () => {
        /*if (!username || !password) {
            Alert.alert('Error', 'Please enter both username and password %');
            return;
        }*/
       if (userData.username && userData.password) {
            //Alert.alert(userData.username , userData.password);
            navigation.navigate("ItemForm")

        } else {
            Alert.alert('Error', 'Please enter both username and password');
        }
    };
    /*const handleLogin = () => {
        if (!username || !password) {
            Alert.alert('Error', 'Please enter both username and password %');
            return;
        }

        if (userData.username && userData.password) {
            //Alert.alert("Done");
           // navigation.navigate('NewItemForm');
            Alert.alert(userData.username ,userData.password);

        } else {
            Alert.alert('Error', 'Incorrect username or password');
        }
    };*/
    return (
        <SafeAreaView style={styles.safeArea} >
            <TouchableOpacity style={styles.menu} onPress={handleMenuClick}>
                <Image style={styles.menuImg} source={menusImage}  />
            </TouchableOpacity>

            <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
                <Text>Menu Content</Text>
                <View style={styles.leftSideView}></View>
            </Animated.View>

            <Text style={styles.evText} >Evergreen</Text>
            <Image style={styles.leftAro} source={leftArrow}  />
            <Text style={styles.orText}>ORGANICTEA</Text>
            <Image style={styles.rightAro} source={rightArrow} />

            <View style={styles.loginView}>
                <Text style={styles.txtLogin}>Login</Text>
                <View style={styles.userNameView}>
                    <Text style={styles.lblUserName}>username</Text>
                    <TextInput
                        style={styles.txtUserName}
                        onChangeText={(text) => setUserData({ ...userData, username: text })}
                        value={userData.username}
                    />
                </View>

                <View style={styles.passwordView}>
                    <Text style={styles.lblPassword}>password</Text>
                    <TextInput
                        style={styles.txtPassword}
                        onChangeText={(text) => setUserData({ ...userData, password: text })}
                        value={userData.password}
                        secureTextEntry
                    />
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
            </View>
            {/*<View style={styles.loginView}>
               <Text style={styles.txtLogin}>Login</Text>
                <View style={styles.userNameView}>
                   <Text style={styles.lblUserName}>username</Text>
                    <TextInput
                        style={styles.txtUserName}/>
                </View>

                <View style={styles.passwordView}>
                    <Text style={styles.lblPassword}>password</Text>
                    <TextInput
                        style={styles.txtPassword} value={password}/>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
            </View>*/}
            <View style={styles.ORView}>
                <View style={styles.leftView}></View>
                <Text style={styles.lblORText}>OR</Text>
                <View style={styles.rightView}></View>
            </View>

            <View style={styles.registerView}>
                <Text style={styles.lblRegister}>Register</Text>
                <View style={styles.registerUserNameView}>
                    <Text style={styles.lblRUserName}>username</Text>
                    <TextInput
                        style={styles.txtRUserName} value={username} onChangeText={setUsername}/>
                </View>

                <View style={styles.registerUEmailView}>
                    <Text style={styles.lblREmail}>Email</Text>
                    <TextInput
                        style={styles.txtREmail} value={email} onChangeText={setEmail}/>
                </View>

                <View style={styles.registerPasswordView}>
                    <Text style={styles.lblRPassword}>password</Text>
                    <TextInput
                        style={styles.txtRPassword} value={password} onChangeText={setPassword} secureTextEntry/>
                </View>
                <TouchableOpacity style={styles.btnRegister} onPress={handleRegister}>
                    <Text style={styles.btnRegisterText}>Register</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bottomBar}>
                {/*<TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
                <Image source={userPng} style={styles.userPngS}/>
            </TouchableOpacity>*/}
                {/* <Image source={userPng} style={styles.userPngS}/>*/}

                <TouchableOpacity style={styles.userPng}
                                  onPress={() => navigation.navigate("")}>
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
    loginView:{
        width : "100%",
        height : 250,
        backgroundColor : "transparent",
        position : "absolute",
        top : 90,
    },
    txtLogin : {
        fontSize : 25,
        fontWeight : "bold",
        color : "black",
        textAlign : "center",
        alignItems : "center",

    },
    userNameView : {
        width : "100%",
        height : 65,
        backgroundColor : "transparent",
        position : "relative",
        top : "10%",
    },
    lblUserName : {
        fontSize : 15,
        color : "black",
        position : "relative",
        left : "8%",
    },
    txtUserName : {
        width: "85%",
        height: 45,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        position: "absolute",
        bottom: 0,
        left: "8%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4, // Adjust this value for a more pronounced bottom shadow
        },
        shadowOpacity: 0.3, // Adjust this value for shadow opacity (lowered from 1.3 to 0.3)
        shadowRadius: 4.65, // Adjust this value for shadow blur radius
        elevation: 8, // This is for Android shadow effect
        backgroundColor: "#fff", // Ensure a background color is set so shadow is visible outside the border
    },
    passwordView : {
        width : "100%",
        height : 65,
        backgroundColor : "transparent",
        position : "relative",
        top : "13%",
    },
    lblPassword : {
        fontSize : 15,
        color : "black",
        position : "relative",
        left : "8%",
    },
    txtPassword : {
        width: "85%",
        height: 45,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        position: "absolute",
        bottom: 0,
        left: "8%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4, // Adjust this value for a more pronounced bottom shadow
        },
        shadowOpacity: 0.3, // Adjust this value for shadow opacity (lowered from 1.3 to 0.3)
        shadowRadius: 4.65, // Adjust this value for shadow blur radius
        elevation: 8, // This is for Android shadow effect
        backgroundColor: "#fff", // Ensure a background color is set so shadow is visible outside the border
    },
    btnLogin : {
      position: "relative",
      bottom : -22,
        left: 0,
        right : 0,
        margin :  "auto",
        width  : "40%",
        height : 40,
        backgroundColor : "black",
        borderRadius : 10,

    },
    btnLoginText: {
        color : "white",
        fontSize : 20,
        position : "relative",
        left : 0,
        right : 0,
        bottom: 0,
        top : 0,
        margin : "auto",

    },
    ORView : {
        width : "100%",
        height : 25,
        backgroundColor : "transparent",
        position : "absolute",
        top : 350,
    },
    leftView :{
      width : "33%",
      height : 3,
        backgroundColor : "black",
        position : "relative",
        top : 15,
        margin : "auto",
        right : 90,


    },
    rightView : {
        width : "33%",
        height : 3,
        backgroundColor : "black",
        position : "relative",
        bottom : 10,
        margin : "auto",
        left : 90,

    },
    lblORText  :{
      fontSize : 20,
        color : "black",
        position : "relative",
        top : 0,
        bottom : 0,
        margin : "auto",
    },
    registerView :{
        width : "100%",
        height : 310,
        backgroundColor : "transparent",
        position : "absolute",
        bottom : 50,
    },
    lblRegister : {
      fontSize : 25,
      fontWeight : "bold",
      textAlign : "center",
        color : "black",
    },
    registerUserNameView :{
        width : "100%",
        height : 65,
        backgroundColor : "transparent",
        position : "relative",
        top : "2%",
    },
    lblRUserName : {
        fontSize : 15,
        color : "black",
        position : "relative",
        left : "8%",
    },
    txtRUserName : {
        width: "85%",
        height: 45,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        position: "absolute",
        bottom: 0,
        left: "8%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4, // Adjust this value for a more pronounced bottom shadow
        },
        shadowOpacity: 0.3, // Adjust this value for shadow opacity (lowered from 1.3 to 0.3)
        shadowRadius: 4.65, // Adjust this value for shadow blur radius
        elevation: 8, // This is for Android shadow effect
        backgroundColor: "#fff", // Ensure a background color is set so shadow is visible outside the border
    },
    registerUEmailView : {
        width : "100%",
        height : 65,
        backgroundColor : "transparent",
        position : "relative",
        top : "5%",
    },
    lblREmail : {
        fontSize : 15,
        color : "black",
        position : "relative",
        left : "8%",
    },
    txtREmail : {
        width: "85%",
        height: 45,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        position: "absolute",
        bottom: 0,
        left: "8%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4, // Adjust this value for a more pronounced bottom shadow
        },
        shadowOpacity: 0.3, // Adjust this value for shadow opacity (lowered from 1.3 to 0.3)
        shadowRadius: 4.65, // Adjust this value for shadow blur radius
        elevation: 8, // This is for Android shadow effect
        backgroundColor: "#fff", // Ensure a background color is set so shadow is visible outside the border
    },
    registerPasswordView : {
        width : "100%",
        height : 65,
        backgroundColor : "transparent",
        position : "relative",
        top : "8%",
    },
    lblRPassword : {
        fontSize : 15,
        color : "black",
        position : "relative",
        left : "8%",
    },
    txtRPassword : {
        width: "85%",
        height: 45,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        position: "absolute",
        bottom: 0,
        left: "8%",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4, // Adjust this value for a more pronounced bottom shadow
        },
        shadowOpacity: 0.3, // Adjust this value for shadow opacity (lowered from 1.3 to 0.3)
        shadowRadius: 4.65, // Adjust this value for shadow blur radius
        elevation: 8, // This is for Android shadow effect
        backgroundColor: "#fff", // Ensure a background color is set so shadow is visible outside the border
    },
    btnRegister : {
        position: "relative",
        bottom : -13,
        left: 0,
        right : 0,
        margin :  "auto",
        width  : "40%",
        height : 40,
        backgroundColor : "black",
        borderRadius : 10,

    },
    btnRegisterText: {
        color : "white",
        fontSize : 20,
        position : "relative",
        left : 0,
        right : 0,
        bottom: 0,
        top : 0,
        margin : "auto",

    },
    bottomBar:{
        width: '100%',
        height:35,
        backgroundColor:'black',
        position: 'absolute',
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

})
export default LoginForm;