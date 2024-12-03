import React, { useRef, useState } from "react";
import {
    Alert,
    Animated,
    Image,
    SafeAreaView, ScrollView,
    StyleSheet,
    Text, TextInput,
    TouchableOpacity,
    View,
} from "react-native";

// Import images
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
import leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
import rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
import plusImg from 'D:/Mobile/tea_product_mobile/src/assect/plus (2).png' ;
import miImg from 'D:/Mobile/tea_product_mobile/src/assect/plus (2).png' ;
// @ts-ignore
import  userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';

const OrderForm = ({ route,navigation }) => {
    const { itemName, itemPrice, itemImage } = route.params;
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;
    const [showDeliveryDetails, setShowDeliveryDetails] = useState(false);

    const toggleMenu = () => {
        setIsMenuVisible(prev => !prev);

        Animated.timing(slideAnim, {
            toValue: isMenuVisible ? -250 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(itemPrice);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        setTotalPrice((quantity + 1) * itemPrice);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice((quantity - 1) * itemPrice);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableOpacity style={styles.menu} onPress={toggleMenu}>
                <Image style={styles.menuImg} source={menusImage} />
            </TouchableOpacity>

            <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
                <Text>Menu Content</Text>
            </Animated.View>

            <Text style={styles.evText}>Evergreen</Text>
            <Image style={styles.leftAro} source={leftArrow} />
            <Text style={styles.orText}>ORGANIC TEA</Text>
            <Image style={styles.rightAro} source={rightArrow} />

            <View style={styles.itemContainer}>
                <View style={styles.card}>
                    <Image source={itemImage} style={styles.itemImage} />
                <Text style={styles.itemName}>{itemName}</Text>
                <Text style={styles.itemPrice}>Price: Rs.{totalPrice.toFixed(2)}</Text>
                    <View style={styles.qtyView}>
                        <Text style={styles.qty}>{quantity}</Text>
                      <TouchableOpacity style={styles.plusImg} onPress={incrementQuantity}>
                          <Text style={styles.pText}>+</Text>
                         {/* <Image source={plusImg} style={styles.pIMG}/>*/}
                      </TouchableOpacity>
                        <TouchableOpacity style={styles.miImg} onPress={decrementQuantity}>
                            <Text style={styles.mText}>-</Text>
                            {/* <Image source={plusImg} style={styles.pIMG}/>*/}
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styles.conOrder}>
                <TouchableOpacity style={styles.button} onPress={() => setShowDeliveryDetails(true)}>
                    <Text style={styles.buttonText}>Conform Order</Text>
                </TouchableOpacity>
                {showDeliveryDetails && (
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.deliveryDetails}>
                            <Text style={styles.lblname}>Name</Text>
                            <TextInput style={styles.name}></TextInput>

                            <Text style={styles.lblname}>address</Text>
                            <TextInput style={styles.name}></TextInput>

                            <Text style={styles.lblname}>tel</Text>
                            <TextInput style={styles.name}></TextInput>
                            <Text style={styles.lblname}>City</Text>
                            <TextInput style={styles.name}></TextInput>
                        </View>

                       {/* <View style={styles.deliveryDetails}>
                            <Text style={styles.lblAddress}>address</Text>
                            <TextInput style={styles.name}></TextInput>
                        </View>*/}
                        {/*<View style={styles.deliveryDetails}>
                            <Text style={styles.lbl}>tel</Text>
                            <TextInput style={styles.name}></TextInput>
                        </View>
                        <View style={styles.deliveryDetails}>
                            <Text style={styles.lbl}>City</Text>
                            <TextInput style={styles.name}></TextInput>
                        </View>*/}
                    </ScrollView>
                )}
                <TouchableOpacity style={styles.pB} onPress={()=>alert("Success")}>
                    <Text style={styles.pBText}>Place Order</Text>
                </TouchableOpacity>
            </View>
            {/*{showDeliveryDetails && (
                <ScrollView style={styles.deliveryDetails}>
                     <Text style={styles.detailText}>Delivery Detail 1</Text>
                        <Text style={styles.detailText}>Delivery Detail 2</Text>
                        <Text style={styles.detailText}>Delivery Detail 3</Text>
                         Add more delivery details as needed
                </ScrollView>
            )}*/}

            {/*<View style={styles.deliveryDetails}>

            </View>*/}

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.userPng}
                                  onPress={() => navigation.navigate("")}>
                    <Image source={userPng} style={styles.userPngS} />
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    );
};

/*import {
    Alert,
    Animated, Button,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, {useRef, useState} from "react";
// @ts-ignore
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
// @ts-ignore
import  leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
// @ts-ignore
import  rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
// @ts-ignore
import  userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';

const OrderForm = ({ route }) =>{
    const { itemName, itemPrice, itemImage } = route.params;
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


    return(<SafeAreaView style={styles.safeArea}>
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

            <View style={styles.itemContainer}>
                <Image source={itemImage} style={styles.itemImage} />
                <Text style={styles.itemName}>{itemName}</Text>
                <Text style={styles.itemPrice}>Price: {itemPrice}</Text>
            </View>

    </SafeAreaView>
    )
}*/
const styles = StyleSheet.create({
    safeArea: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    menu: {
        position: 'absolute',
        left: 0,
        top: 0,
    },
    menuImg: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        position: 'absolute',
        left: 0,
        top: 0,
    },
    menuO: {
        backgroundColor: 'blue',

    },
    leftSideView: {
        width: '200%',
        height: '3000%',
        backgroundColor: 'black',
        position: 'absolute',
        left: 0,


    },
    evText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#A0AF78',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        margin: "auto",

    },
    leftAro: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 110,
        top: 45,
    },
    orText: {
        fontWeight: 'bold',
        color: '#862D2D',
        textAlign: 'center',
        position: 'absolute',
        top: 50,
    },
    rightAro: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 110,
        top: 45,
    },
    itemContainer: {
        alignItems: 'center',
        backgroundColor : "#ededed",
        width: '100%',
        height: '25%',
        position : "absolute",
        top : "13%"
    },
    card :{
       backgroundColor : "white",
        width: '100%',
        height : "63%",
        marginTop : 20
    },

    itemImage: {
        width: 110,
        height: "100%",
        resizeMode: 'cover',
        marginLeft : 20
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        position : "absolute",
        top : 0,
        right : "13%"
    },
    itemPrice: {
        fontSize: 16,
        color: '#888',
        position : "absolute",
        top : 40,
        right : "20%"
    },
    qtyView :{
        backgroundColor : "#ededed",
        width : "25%",
        height :"40%",
        position : "absolute",
        bottom : 5,
        right : "20%"
    },
    plusImg : {
        backgroundColor : "transparent",
        width : "50%",
        height : "49%",
        position : "absolute",
        right : 0,
        borderStyle : "solid",
        borderColor : "black",
        borderWidth: 1,

    },
    pText :{
        fontWeight : "bold",
        fontSize : 25,
        position : "relative",
        bottom : 9,
        left : 0,
        right : 0,
        margin : "auto"

    },
    miImg : {
        backgroundColor : "transparent",
        width : "50%",
        height : "49%",
        position : "absolute",
        right : 0,
        bottom :0,
        borderStyle : "solid",
        borderColor : "black",
        borderWidth: 1,
    },
    mText : {
        fontWeight : "bold",
        fontSize : 25,
        position : "relative",
        bottom : 9,
        left : 0,
        right : 0,
        margin : "auto"
    },
    qty : {
        fontWeight : "bold",
        fontSize : 25,
        position : "relative",
        left : 15,
        top : 6
    },
    bottomBar:{
        width: '100%',
        height:35,
        backgroundColor:'black',
        position: 'absolute',
        bottom:0,

    },
    conOrder : {
        width : "100%",
        height : "55%",
        backgroundColor  : "transparent",
        position: 'absolute',
        top:300,
    },
    button : {
      backgroundColor : "#A0AF78",
      width : "30%",
      height : "11%",
        position : "absolute",
        right : 0,
        marginRight : 10,
        borderRadius  : 10
    },
    buttonText : {
      color : "white",
      fontWeight : "bold",
      fontSize : 15,
        textAlign : "center",
        position : "relative",
        top : 13
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

    scrollView : {
        width : "100%",
        height  : "100%",
        backgroundColor : "transparent",
        position : "relative",
        bottom  : "-15%"
    },
    deliveryDetails : {
        width : "100%",
        height : "100%",
        backgroundColor  : "transparent",

    }
    ,name : {
        width : "90%",
        height : "15%",
        marginLeft : 20,

        marginTop : 5,
        borderWidth : 1,
        borderStyle : "solid",
        borderColor : "black",

    },
    lblname : {
        fontSize : 15,
        marginLeft : 20,
        fontWeight : "bold",
    },
    pB :{
        width : "50%",
        height : " 10%",
        backgroundColor : "#A0AF78",
        position : "absolute",
        bottom : "1%",
        left : "24%",

    },
    pBText :{
        fontSize : 20,
        color : "white",
        fontWeight : "bold",
        position : "relative",
        left : "19%",
        top : "20%",


    }
/*    deliveryDetails: {
        width: '100%',
        height: '50%', // Reduced height
        backgroundColor: 'red',
        position: 'relative',
        bottom: '-10%', // Adjusted to be more practical
        padding: 10,
        borderRadius: 5,
    },*/
});
export default OrderForm;