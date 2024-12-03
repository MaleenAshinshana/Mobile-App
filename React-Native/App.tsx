/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import MainForm from './src/Component/MainForm.tsx';
import LoginForm from "./src/Component/LoginForm.tsx";
import ItemForm from "./src/Component/ItemForm.tsx";
//import ItemForm from "./src/Component/ItemForm.tsx";

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import OrderForm from "./src/Component/OrderForm.tsx";
import NewItemForm from "./src/Component/NewItemForm.tsx";


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainForm} options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginForm} options={{ headerShown: false }} />
          <Stack.Screen name="ItemForm" component={ItemForm} options={{ headerShown: false }} />
          <Stack.Screen name="Order" component={OrderForm} options={{ headerShown: false }} />
          <Stack.Screen name={"NewItemForm"} component={NewItemForm} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>




  );
}

const styles = StyleSheet.create({
  safeArea: {

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
      height: '100%',


  },


});




export default App;

/* <SafeAreaView >
     <MainForm />
      <LoginForm/>
    </SafeAreaView>*/
/* <NavigationContainer>
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen name="Main" component={MainForm} />
    <Stack.Screen name="Login" component={LoginForm} />
  </Stack.Navigator>
</NavigationContainer>*/
