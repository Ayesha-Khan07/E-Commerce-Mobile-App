import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

export default function CartCard({item, deleteItemFromCart, updateQuantity}) {
    const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/cwlk21f74nd9iamrlzkh.png";

  return (
     <View style = {styles.container}>
        <Image source = {{uri: item.image }} style = {styles.coverImg}/>
        <View style={styles.cardContent}>
            <Text  style={styles.title}> {item.title} </Text>
            <Text  style={styles.price}>Rs. {item.price} </Text>
            <View style={styles.circleSizaContainer}>
                <View style = {[styles.circle, {backgroundColor: item.color}]} />
                <View style = {styles.sizeCircle}>
                    <Text style = {styles.sizeText}> {item.size} </Text>
                </View>
            </View>
        </View>
        <View style={styles.rightControls}>
            <TouchableOpacity onPress={() => {
                 deleteItemFromCart(item);
            }}>
                <FontAwesome6  style={styles.trashIcon}
                    name={"trash"} color = {"#F68CB5"} size = {23}/>
            </TouchableOpacity>

            <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => updateQuantity(item, 'decrease')} style={styles.qtyBtn}>
                 <Text style={styles.qtyText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.qtyValue}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(item, 'increase')} style={styles.qtyBtn}>
                <Text style={styles.qtyText}>+</Text>
            </TouchableOpacity>
           </View>

        </View> 
            
</View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        flexDirection: "row",
    },
    coverImg:{
        height: 125,
        width: "25%",
        borderRadius: 20,
    },
    cardContent:{
        flex: 1,
        marginHorizontal:10,
    },
    title:{
        fontSize: 20,
        color: "#444444",
        fontWeight: "500",
    },
    price:{
        color:"#797979",
        marginVertical:10,
        fontSize: 18,
    },
    circle:{
        height:32,
        width:32,
        borderRadius: 16,
        backgroundColor: "#7094C1",
    },
    circleSizaContainer:{
        flexDirection:"row",
    },
    sizeCircle:{
        backgroundColor:"white",
        height: 32,
        width: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    sizeText:{
        fontSize: 18,
        fontWeight: "500",
    },
    trashIcon:{
        paddingHorizontal: 30,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 45,
      },
      qtyBtn: {
        backgroundColor: "#E96E6E",
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 2,
      },
      qtyText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
      },
      qtyValue: {
        marginHorizontal: 10,
        fontSize: 18,
        fontWeight: "700",
      },    
})