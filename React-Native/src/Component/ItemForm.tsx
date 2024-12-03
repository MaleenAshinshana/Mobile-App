import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    Animated,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Import images
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
import leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
import rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
import userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';
import BTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.1-_1_.jpg';
import GNTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.6.jpg';
import MOTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.5.jpg';
import OLTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.7.jpg';
import blackT from 'D:/Mobile/tea_product_mobile/src/assect/blackTea.jpeg';

const teaItems = [
    { id: 'BlackTea', image: BTea, title: 'Black Tea' },
    { id: 'GreenTea', image: GNTea, title: 'Green Tea' },
    { id: 'MatchaTea', image: MOTea, title: 'Matcha Tea' },
    { id: 'OolongTea', image: OLTea, title: 'Oolong Tea' },
];

const ItemCard = ({ image, title, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const TeaItem = ({ image, name, price, onAddToCart }) => (
    <TouchableOpacity style={styles.item} onPress={onAddToCart}>
        <Image source={image} style={styles.teaImg} />
        <Text style={styles.lblName}>{name}</Text>
        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>{price}</Text></Text>
        <TouchableOpacity style={styles.btnAddToCart} onPress={onAddToCart}>
            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
        </TouchableOpacity>
    </TouchableOpacity>
);

const ItemForm = () => {
    const navigation = useNavigation();
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;
    const [visibleTeaView, setVisibleTeaView] = useState("BlackTea");

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isMenuVisible ? 0 : -500,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isMenuVisible]);

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    const handleTeaView = (teaType) => {
        setVisibleTeaView(teaType === visibleTeaView ? null : teaType);
    };

    const teaData = {
        BlackTea: Array(8).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
        GreenTea: Array(6).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
        MatchaTea: Array(4).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
        OolongTea: Array(4).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
    };

    const handleAddToCart = (item) => {
        navigation.navigate("Order", {
            itemName: item.name,
            itemPrice: item.price,
            itemImage: item.image,
        });
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

            <ScrollView style={styles.mainItemCard}>
                {teaItems.map(item => (
                    <ItemCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        onPress={() => handleTeaView(item.id)}
                    />
                ))}
            </ScrollView>

            <View style={styles.itemsMainView}>
                {teaData[visibleTeaView] && (
                    <ScrollView style={styles.teaView}>
                        <Text style={styles.lblTeaText}>{visibleTeaView.replace(/([A-Z])/g, ' $1')}</Text>
                        {teaData[visibleTeaView].map((tea, index) => (
                            <TeaItem
                                key={index}
                                name={tea.name}
                                price={tea.price}
                                image={tea.image}
                                onAddToCart={() => handleAddToCart(tea)}
                            />
                        ))}
                    </ScrollView>
                )}
            </View>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.userPng} onPress={() => Alert.alert('User Icon Pressed')}>
                    <Image source={userPng} style={styles.userPngS} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

/*import React, { useEffect, useRef, useState } from "react";
import {
    Alert,
    Animated,
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// Import images
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
import leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
import rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
import userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';
import BTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.1-_1_.jpg';
import GNTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.6.jpg';
import MOTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.5.jpg';
import OLTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.7.jpg';
import blackT from 'D:/Mobile/tea_product_mobile/src/assect/blackTea.jpeg';
import {useNavigation} from "@react-navigation/native";

const teaItems = [
    { id: 'BlackTea', image: BTea, title: 'Black Tea' },
    { id: 'GreenTea', image: GNTea, title: 'Green Tea' },
    { id: 'MatchaTea', image: MOTea, title: 'Matcha Tea' },
    { id: 'OolongTea', image: OLTea, title: 'Oolong Tea' },
];

const ItemCard = ({ image, title, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);

const TeaItem = ({ image, name, price, onAddToCart }) => (
    <TouchableOpacity style={styles.item} onPress={onAddToCart}>
        <Image source={image} style={styles.teaImg} />
        <Text style={styles.lblName}>{name}</Text>
        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>{price}</Text></Text>
        <TouchableOpacity style={styles.btnAddToCart} onPress={onAddToCart}>
            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
        </TouchableOpacity>
    </TouchableOpacity>
);
const navigation = useNavigation();
const handleAddToCart = (item) => {
    // Navigate to OrderForm and pass item details
    navigation.navigate("Order", {
        itemName: item.name,
        itemPrice: item.price,
        itemImage: item.image,
    });
};

const ItemForm = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;
    const [visibleTeaView, setVisibleTeaView] = useState("BlackTea");

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isMenuVisible ? 0 : -500,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [isMenuVisible]);

    const toggleMenu = () => setIsMenuVisible(prev => !prev);

    const handleTeaView = (teaType) => {
        setVisibleTeaView(teaType === visibleTeaView ? null : teaType);
    };

    const teaData = {
        BlackTea: Array(8).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
        GreenTea: Array(6).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
        MatchaTea: Array(4).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
        OolongTea: Array(4).fill({ name: 'Simple Loose Leaf', price: 150, image: blackT }),
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

            <ScrollView style={styles.mainItemCard}>
                {teaItems.map(item => (
                    <ItemCard
                        key={item.id}
                        image={item.image}
                        title={item.title}

                        onPress={() => handleTeaView(item.id)}
                    />
                ))}
            </ScrollView>

            <View style={styles.itemsMainView}>
                {teaData[visibleTeaView] && (
                    <ScrollView style={styles.teaView}>
                        <Text style={styles.lblTeaText}>{visibleTeaView.replace(/([A-Z])/g, ' $1')}</Text>
                        {teaData[visibleTeaView].map((tea, index) => (
                            <TeaItem
                                key={index}
                                name={tea.name}
                                price={tea.price}
                                image={tea.image}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </ScrollView>
                )}
            </View>

            <View style={styles.bottomBar}>
                <TouchableOpacity style={styles.userPng} onPress={() => Alert.alert('User Icon Pressed')}>
                    <Image source={userPng} style={styles.userPngS} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};*/

const styles = StyleSheet.create({
    // Consolidated styles for easier maintenance
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    menuImg: {
        width: 50,
        height: 50,
    },
    evText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#A0AF78',
        textAlign: 'center',
        marginVertical: 10,
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
        top: -20,
    },
    rightAro: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 110,
        top: 45,
    },
    mainItemCard : {
        width: "100%",
        height : 400,
        backgroundColor : "transparent",
        position : "absolute",
        top : 80,
    },
    card: {
        width: '60%',
        height: 130,
        backgroundColor: '#ededed',
        margin: 5,
        borderRadius: 5,
        position  :  "relative",
        left :"18%",

        //display :"flex",
    },


    image: {
        width: '85%',
        height: '80%',
        resizeMode: 'cover',
        borderRadius: 5,
        margin: 'auto',
    },
    title: {
        color: 'black',
        marginTop: 5,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemsMainView  : {
        width : "100%",
        height : 340,
        backgroundColor : "#e6e6e6",
        position : "absolute",
        top : "48%"

    },
    teaView : {
        width : "100%",
        height : "95%",
        backgroundColor : "transparent",
        position : "absolute",
        bottom : 0
    },
    lblTeaText : {
        fontWeight : "bold",
        fontSize : 20,
        color  : "black",
        textAlign : "center",
    },
    item: {
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    teaImg : {
        width : "50%",
        height : "90%",
        position : "relative",
        top : 0,
        bottom : 0,
        left : "-40%",
        margin : "auto"
    },
    lblName : {
        fontSize : 17,
        color : "#98a96d",
        fontWeight  : "bold",
        position : "absolute",
        right : 45,
        top : 10
    },
    lblPrice : {
        color : "black",
        fontSize : 17,
        position : "absolute",
        right : 70,
        top : 40

    },
    lblPy : {
        color : "black",
        fontWeight  : "bold"
    },
    btnAddToCart: {
        backgroundColor: '#A0AF78',
        padding: 10,
        marginTop: 60,
        marginRight : 50,
        borderRadius: 5,
        alignItems: 'center',
    },
    btnAddToCartText: {
        color: 'white',
        fontWeight: 'bold',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    userPng: {
        width: 50,
        height: 50,
    },
    userPngS: {
        width: '100%',
        height: '100%',
    },
});

export default ItemForm;


/*
import {
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
import React, {useEffect, useRef, useState} from "react";

// @ts-ignore
import menusImage from 'D:/Mobile/tea_product_mobile/src/assect/menus.png';
// @ts-ignore
import  leftArrow from 'D:/Mobile/tea_product_mobile/src/assect/left-arrow.png';
// @ts-ignore
import  rightArrow from 'D:/Mobile/tea_product_mobile/src/assect/right-arrow.png';
// @ts-ignore
import  userPng from 'D:/Mobile/tea_product_mobile/src/assect/user.png';
// @ts-ignore
import  BTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.1-_1_.jpg';

// @ts-ignore
import  GNTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.6.jpg';

// @ts-ignore
import  MOTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.5.jpg';

// @ts-ignore
import  OLTea from 'D:/Mobile/tea_product_mobile/src/assect/collection1.7.jpg';
// @ts-ignore
import  blackT from 'D:/Mobile/tea_product_mobile/src/assect/blackTea.jpeg';

import TeaCard from "./Com/TeaCard.tsx";

const ItemForm = ({}) =>{
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;
    /!*const [GreenTeaView, setGreenTeaView] = useState();
    const [BlackTeaView, setBlackTeaView] = useState();
    const [MatchTeaView, setMatchTeaView] = useState();
    const [OolongTeaView, setOolongTeaView] = useState();*!/

    const [visibleTeaView, setVisibleTeaView] = useState("BlackTea");

  useEffect(()=>{

  })
    const handleTeaView = (teaType:any) => {
        setVisibleTeaView(teaType === visibleTeaView ? null : teaType);
    };
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
    /!*const  handleOrder = () =>{
        navigation.navigate("Order")
    };*!/
   /!*const  handleBTView = () =>{
     Alert.alert("BTView")
   };
   const handleGNView = () =>{
       Alert.alert("GNView");
   };
    const handleMOView = () =>{
        Alert.alert("MOView");
    };
    const handleOLView = () =>{
        Alert.alert("OLView");
    };*!/
    return(
        <SafeAreaView style={styles.safeArea}>
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

            <View style={styles.mainItemCard}>

                <TouchableOpacity  style={styles.BTCard} onPress={() => handleTeaView('BlackTea')} >
                    <Image source={BTea} style={styles.image} />
                    <Text style={styles.title}>BlackTea</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.GNCard} onPress={() => handleTeaView('GreenTea')} >
                    <Image source={GNTea} style={styles.image} />
                    <Text style={styles.title}>Green Tea</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.MOCard} onPress={() => handleTeaView('MatchaTea')}>
                    <Image source={MOTea} style={styles.image} />
                    <Text style={styles.title}>Motcha Tea</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.OLCard} onPress={() => handleTeaView('OolangTea')}>
                    <Image source={OLTea} style={styles.image} />
                    <Text style={styles.title}>Oolong Tea</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.itemsMainView}>
                {/!*<View style={styles.blackTeaView}>

                </View>*!/}
                {visibleTeaView === 'BlackTea' && (
                    <ScrollView  style={styles.teaView}>
                        <Text style={styles.lblTeaText}>Black Tea </Text>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            {/!*<TouchableOpacity style={styles.btnAddToCart} onPress={()=> {alert('OK')}}>
                                <Text style={styles.btnAddToCartText} onPress={()=> {alert('OK')}}>Add To Cart</Text>
                            </TouchableOpacity>*!/}
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                            <button>PRES</button>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>

                    </ScrollView >
                )}
                {visibleTeaView === 'GreenTea' && (
                    <ScrollView  style={styles.teaView}>
                        <Text style={styles.lblTeaText}>Green Tea </Text>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>



                    </ScrollView >
                )}
                {visibleTeaView === 'MatchaTea' && (
                    <ScrollView style={styles.teaView}>
                        <Text style={styles.lblTeaText}>Matcha Tea </Text>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </ScrollView>
                )}
                {visibleTeaView === 'OolangTea' && (
                    <ScrollView style={styles.teaView} >
                        <Text style={styles.lblTeaText} >OOlong Tea </Text>
                        <TouchableOpacity style={styles.items}>
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.items} >
                            <Image source={blackT} style={styles.teaImg}/>
                            <Text style={styles.lblName}>Simple Loos Leaf</Text>
                            <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                            <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                                <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </ScrollView>
                )}
               {/!* <View style={styles.greenTeaView}>

                </View>*!/}
            </View>
            <View style={styles.bottomBar}>
                {/!*<TouchableOpacity onPress={() => navigation.navigate("LoginForm")}>
                <Image source={userPng} style={styles.userPngS}/>
            </TouchableOpacity>*!/}
                {/!* <Image source={userPng} style={styles.userPngS}/>*!/}

                <TouchableOpacity style={styles.userPng}
                                  onPress={() => Alert.alert('OK')}>
                    <Image source={userPng} style={styles.userPngS} />
                </TouchableOpacity>

            </View>
            <View>

            </View>

        </SafeAreaView>
    );
}
/!*export function CartScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.cartText}>Item added to cart!</Text>
        </View>
    );
}*!/
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
    mainItemCard : {
        width: "100%",
        height : 300,
        backgroundColor : "transparent",
        position : "absolute",
        top : 80,
    },
    BTCard : {
      width : "45%",
      height : 120,
      backgroundColor : "#ededed",
        margin : 10,
        display : "flex",
        borderRadius : 5,
    },
    image: {
        width: "85%",
        height: "80%",
        resizeMode: "cover",
        borderRadius : 5,
        position : "relative",
        left : 0,
        right : 0,
        top : 5,
        margin : "auto"
    },
    title: {
        color: "black",
        marginTop: 5,
        textAlign: "center",
        fontWeight : "bold",

    },
    GNCard : {
        width : "45%",
        height : 120,
        backgroundColor : "#ededed",
        margin : 10,
        display : "flex",
        borderRadius : 5,
        position : "absolute",
        right : 0

    },
    MOCard : {
        width : "45%",
        height : 120,
        backgroundColor : "#ededed",
        margin : 10,
        display : "flex",
        borderRadius : 5,

    },
    OLCard : {
        width : "45%",
        height : 120,
        backgroundColor : "#ededed",
        margin : 10,
        display : "flex",
        borderRadius : 5,
        position : "absolute",
        right : 0,
        bottom : 20
    },
    itemsMainView  : {
        width : "100%",
        height : 340,
        backgroundColor : "#e6e6e6",
        position : "absolute",
        top : "48%"

    },
    teaView : {
      width : "100%",
      height : "95%",
      backgroundColor : "transparent",
        position : "absolute",
        bottom : 0
    },
    lblTeaText : {
      fontWeight : "bold",
      fontSize : 20,
        color  : "black",
        textAlign : "center",
    },
    items : {
        width : "100%",
        height : 120,
        backgroundColor :"white",
        marginTop  : 10,
        borderRadius : 10,
        pointerEvents : "box-only",

    },
    teaImg : {
      width : "50%",
      height : "90%",
        position : "relative",
        top : 0,
        bottom : 0,
        right : "26%",
        margin : "auto"
    },
    lblName : {
        fontSize : 17,
        color : "#98a96d",
        fontWeight  : "bold",
        position : "absolute",
        right : 45,
        top : 10
    },
    lblPrice : {
      color : "black",
      fontSize : 17,
      position : "absolute",
        right : 70,
        top : 40

    },
    lblPy : {
      color : "black",
        fontWeight  : "bold"
    },
    btnAddToCart : {
        width : "35%",
        height : "23%",
      backgroundColor : "red",
        position : "absolute",
        right : 30,
        bottom : 10

    },
    btnAddToCartText : {
      color : "white",
        fontWeight : "bold",
      position : "relative",
        left : 0,
        right : 0,
        top : 0,
        bottom : 0,
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


});
export default ItemForm;*/
