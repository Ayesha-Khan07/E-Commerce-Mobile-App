import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

import AntDesign from "react-native-vector-icons/AntDesign";
//import { useNavigation } from 'react-router-dom';
import { useNavigation } from '@react-navigation/native'; 


function ProductCard({item, handleLiked}) {
    const navigation = useNavigation();
    return (
       <TouchableOpacity 
            onPress={() =>{
                navigation.navigate("PRODUCT_DETAILS", {item})
            }}
            style = {styles.container}>
           <Image 
                source = {{uri : item.image}}
                style = {styles.coverImg}/>
            <View style={styles.content}>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.price}>Rs. {item.price}</Text>
            </View>
            <TouchableOpacity 
                onPress={() => handleLiked(item)}
                style = {styles.heartContainer}
                >
                {
                    item.isLiked ? (
                        <AntDesign name = {"heart"} size = {20} color = {"#E55B5B"}/>
                    ) : (
                        <AntDesign name = {"hearto"} size = {20} color = {"#E55B5B"}/>
                    )
                }
               
            </TouchableOpacity>
            
       </TouchableOpacity>
    );
}

export default ProductCard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        position: "relative",
       // borderWidth: 1,
       // borderColor: "black",
    },
    coverImg:{
        height:260,
        width: "90%",
        borderRadius: 15,
        marginVertical: 10,
        marginRight: 10,
    },
    content:{
        paddingLeft: 15,
    },
    title:{
        fontSize: 18,
        color: "#444444",
        fontWeight: "600",
    },
    price:{
        fontSize: 18,
        color: "#9C9C9C",
        fontWeight: "600",
    },
    heartContainer: {
        height: 34,
        width: 34,
        color: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 17,
        position: "absolute",
        top: 20,
        right: 20,
    }
    
})