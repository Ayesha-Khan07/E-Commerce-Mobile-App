import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import Entypo from "react-native-vector-icons/Entypo";
// import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Entypo, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import Home from "./Home";
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import { CartContext, CartProvider } from './components/cartContext';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Account(){
  return(
    <View style={styles.container}>
      <Text>Account function </Text>
    </View>
  )
}

function Reorder(){
  return(
    <View style={styles.container}>
      <Text>Re-Order Function</Text>
    </View>
  )
}

const MyHomeStack = () => {
  return(
    <Stack.Navigator 
      screenOptions={{headerShown:false}}
      initialRouteName="HOME">
        
      <Stack.Screen name='HOME' component={Home} /> 
      <Stack.Screen name='PRODUCT_DETAILS' component={ProductDetails} /> 
      <Stack.Screen name='CART' component={Cart} /> 
    </Stack.Navigator>
  );
};

export default function App() {
  console.log ('App Executed...');

  return (
    <CartProvider>
    <NavigationContainer>
    <Tab.Navigator
       screenOptions={{
          headerShown:false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#E96E6E",

       }}
        >
      <Tab.Screen 
          name="HOME_STACK" 
          component={MyHomeStack}
          options = {{
            tabBarIcon: ({ size, focused, color}) => {
              return <Entypo name={"home"} size={size} color = {color} />
            }
          }} />

      <Tab.Screen 
        name="REORDER" 
        component={Reorder} 
        options = {{
          tabBarIcon: ({ size, color}) => {
            return <MaterialIcons name={"reorder"} size={size} color = {color} />
          }
        }} />

      <Tab.Screen
         name="CART" 
         component={Cart}
         options = {{
          tabBarIcon: ({ size, color}) => {

            const {carts} = useContext(CartContext);

            return(
              <View style = {{position:"relative"}}>
                <MaterialCommunityIcons name={"cart"} size={size} color = {color} />
                <View style = {{
                            height: 16,
                            width: 16,
                            borderRadius: 7,
                            backgroundColor: color,
                            justifyContent: "center",
                            alignItems: "center",
                            position: "absolute",
                            top: -10,
                            right:-5,
                            }}>

                     <Text style = {{fontSize: 12,
                                     color: "white",
                                     fontWeight: "500"}}> {carts?.length}</Text>
                </View>
              </View>
            ) 
          }
        }}
        />

      <Tab.Screen
         name="ACCOUNT" 
         component={Account}
         options = {{
          tabBarIcon: ({ size, color}) => {
            return <FontAwesome6 name={"user"} size={size} color = {color} />
          }
        }}
         
         />
     
    </Tab.Navigator>
    </NavigationContainer>
  
  </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
