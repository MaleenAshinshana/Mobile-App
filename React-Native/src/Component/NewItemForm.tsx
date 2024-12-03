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
const NewItemForm =({}) =>{
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const slideAnim = useRef(new Animated.Value(-500)).current;

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

    const teas = {
        BlackTea: [
            { id: "1", name: "Simple Loose Leaf", price: 150 },
            { id: "2", name: "Simple Loose Leaf", price: 150 },
            { id: "3", name: "Simple Loose Leaf", price: 150 },
            { id: "4", name: "Simple Loose Leaf", price: 150 },
            { id: "5", name: "Simple Loose Leaf", price: 150 },
            { id: "6", name: "Simple Loose Leaf", price: 150 },
            { id: "7", name: "Simple Loose Leaf", price: 150 },
            { id: "8", name: "Simple Loose Leaf", price: 150 },
        ],
        GreenTea: [
            { id: "9", name: "Simple Loose Leaf", price: 150 },
            { id: "10", name: "Simple Loose Leaf", price: 150 },
            { id: "11", name: "Simple Loose Leaf", price: 150 },
            { id: "12", name: "Simple Loose Leaf", price: 150 },
            { id: "13", name: "Simple Loose Leaf", price: 150 },
            { id: "14", name: "Simple Loose Leaf", price: 150 },
        ],
        MatchaTea: [
            { id: "15", name: "Simple Loose Leaf", price: 150 },
            { id: "16", name: "Simple Loose Leaf", price: 150 },
            { id: "17", name: "Simple Loose Leaf", price: 150 },
            { id: "18", name: "Simple Loose Leaf", price: 150 },
        ],
        OolongTea: [
            { id: "19", name: "Simple Loose Leaf", price: 150 },
            { id: "20", name: "Simple Loose Leaf", price: 150 },
            { id: "21", name: "Simple Loose Leaf", price: 150 },
            { id: "22", name: "Simple Loose Leaf", price: 150 },
        ],
    };
    //const teaType = 'BlackTea';

    return <SafeAreaView style={styles.safeArea}>

        console.log('teaType:', teaType);
        console.log('teas[teaType]:', teas[teaType]);
        {/*<Text>NEW ITEM</Text>*/}
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
        {/*<View style={styles.itemsMainView}>
            visibleTeaView === 'BlackTea' && (
            <ScrollView  style={styles.teaView}>
                <Text style={styles.lblTeaText}>Black Tea </Text>
                <TouchableOpacity style={styles.items}>
                    <Image source={blackT} style={styles.teaImg}/>
                    <Text style={styles.lblName}>Simple Loos Leaf</Text>
                    <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                    <TouchableOpacity style={styles.btnAddToCart} onPress={()=> {alert('OK')}}>
                                <Text style={styles.btnAddToCartText} onPress={()=> {alert('OK')}}>Add To Cart</Text>
                            </TouchableOpacity>
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
            )
        </View>*/}

       {/* <ScrollView style={styles.teaView}>
            <Text style={styles.lblTeaText}>{teaType} </Text>
            {(teas[teaType] || []).map((tea) => (
                <TouchableOpacity key={tea.id} style={styles.items}>
                    <Image source={blackT} style={styles.teaImg} />
                    <Text style={styles.lblName}>{tea.name}</Text>
                    <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>{tea.price}</Text></Text>
                    <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                        <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))}
        </ScrollView>*/}
        {/*<ScrollView style={styles.teaView}>
            <Text style={styles.lblTeaText}>{teaType} </Text>
            {teas[teaType].map((tea) => (
                <TouchableOpacity key={tea.id} style={styles.items}>
                    <Image source={blackT} style={styles.teaImg} />
                    <Text style={styles.lblName}>{tea.name}</Text>
                    <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>{tea.price}</Text></Text>
                    <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                        <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            ))}
        </ScrollView>*/}
        {/*<ScrollView style={styles.teaView}>
            <Text style={styles.lblTeaText}>{teaType} </Text>
            {teas && teas[teaType] ? (
                teas[teaType].map((tea) => (
                    <TouchableOpacity key={tea.id} style={styles.items}>
                        <Image source={blackT} style={styles.teaImg} />
                        <Text style={styles.lblName}>{tea.name}</Text>
                        <Text style={styles.lblPrice}>
                            Price : <Text style={styles.lblPy}>{tea.price}</Text>
                        </Text>
                        <TouchableOpacity
                            style={styles.btnAddToCart}
                            onPress={() => Alert.alert('OK')}
                        >
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))
            ) : (
                <Text>No teas available for this type.</Text>
            )}
        </ScrollView>*/}
        {/*<View style={styles.itemsMainView}>
            <View style={styles.blackTeaView}>

                </View>
            {visibleTeaView === 'BlackTea' && (
                <ScrollView  style={styles.teaView}>
                    <Text style={styles.lblTeaText}>Black Tea </Text>
                    <TouchableOpacity style={styles.items} id={"1"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={()=> {alert('OK')}}>
                                <Text style={styles.btnAddToCartText} onPress={()=> {alert('OK')}}>Add To Cart</Text>
                            </TouchableOpacity>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                        <button>PRES</button>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"2"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"3"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"4"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"5"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"6"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"7"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"8"}>
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
                    <TouchableOpacity style={styles.items} id={"9"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"10"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"11"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"12"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"13"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"14"}>
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
                    <TouchableOpacity style={styles.items} id={"15"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"16"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"17"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"18"}>
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
                <ScrollView style={styles.teaView} id={"19"}>
                    <Text style={styles.lblTeaText} >OOlong Tea </Text>
                    <TouchableOpacity style={styles.items}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"20"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"21"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items} id={"22"}>
                        <Image source={blackT} style={styles.teaImg}/>
                        <Text style={styles.lblName}>Simple Loos Leaf</Text>
                        <Text style={styles.lblPrice}>Price : <Text style={styles.lblPy}>150</Text></Text>
                        <TouchableOpacity style={styles.btnAddToCart} onPress={() => Alert.alert('OK')}>
                            <Text style={styles.btnAddToCartText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </ScrollView>
            )}
             <View style={styles.greenTeaView}>

                </View>
        </View>*/}

    </SafeAreaView>
}
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
        backgroundColor : "red",
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
        height : 50,
        backgroundColor : "red",
        position : "absolute",
        top : "55%"

    },
    teaView : {
        width : "100%",
        height : "95%",
        backgroundColor : "blue",
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
})
export default NewItemForm;