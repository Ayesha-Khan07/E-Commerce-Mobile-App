import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function Header({isCart}){

  const navigaton = useNavigation();

  return(
    <View style={[styles.container, isCart && styles.cartHeader]}>
        <TouchableOpacity 
          onPress = {() => navigaton.navigate("HOME_STACK")}
          style = {styles.appIconContainer}>
          {
            isCart ? (<Ionicons name = {"chevron-back"} color = {"#E96E6E"} size = {25}/>) :
            <Image 
                source = {require("../assets/apps.png")}
                style = {styles.appIcon}/>
          }
        </TouchableOpacity>

        {
          isCart &&  <Text style = {styles.myCart}> My Cart </Text>
        }
        <Image 
                source = {require("../assets/dp.png")}
                style = {styles.dpIcon}/>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cartHeader:{
      marginTop: 40,
    },
    appIconContainer: {
        backgroundColor: "#FFFFFF",
        height: 44,
        width: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems:"center",
    },
    appIcon: {
      height: 28,
      width: 28,
    },
    dpIcon: {
        height: 44,
        width: 44,
        borderRadius: 22,
    },
    myCart:{
      fontSize: 28,
      color: "black",
    }
});

