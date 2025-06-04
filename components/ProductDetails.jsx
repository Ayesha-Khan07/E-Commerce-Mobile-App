import { LinearGradient } from 'expo-linear-gradient';
import { useContext, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import Header from './Header';
import { CartContext } from './cartContext';

const imageUrl =
    "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567613/vulb5bckiruhpzt2v8ec.png";

const sizes = ['S','M','L','XL'];
const colorsArray = [
    "#91A1B0",
    "#B11D1D",
    "#1F44A3",
    "#9F632A",
    "#1D752B",
    "#000000",
  ];

function ProductDetails(props) {
    const navigation = useNavigation();
    const {addToCart} = useContext(CartContext);

    const route = useRoute();
    const item = route.params.item;
    const [selectedSize, setselectedSize] = useState(null);
    const [selectedColor, setselectedClor] = useState(null);

    const handleAddToCart = (item) => {
        item.size = selectedSize;
        item.color = selectedColor;
        addToCart(item);
        navigation.navigate("CART");
    };

    return (
             <LinearGradient
                    colors={['#FDF0F3', '#FFFBFC']} 
                    style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

                <View>
                    <Header/>
                </View>
                    <Image source ={{uri: item.image}} style = {styles.coverImg}/>
                <View style = {styles.contentContainer}>
                    <Text style = {styles.title}>{item.title}</Text>
                    <Text style = {[styles.title, styles.price]}>Rs. {item.price}</Text>
                </View>
                <Text style = {[styles.title, styles.sizeText]}>Size</Text>
                <View style = {styles.sizeContainer}>
                    {sizes.map((size,index) => {
                        return(
                            <TouchableOpacity
                                key = {index} 
                                style = {styles.sizeValueContainer}
                                onPress={() => {
                                    setselectedSize(size);
                                }}>

                                 <Text style = {[styles.sizeValue, selectedSize == size && {color:"#E55B5B"},]}> 
                                    {size} 
                                 </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <Text style = {[styles.title, styles.colorText]}>Colors</Text>
                <View style = {styles.colorsContainer}>
                    {
                        colorsArray.map((color,index) => {
                            return(
                                <TouchableOpacity
                                   key = {index}
                                   onPress = {() =>{
                                        setselectedClor(color);
                                   }}
                                   style = {[styles.circleBorder, 
                                             selectedColor === color && {
                                                borderColor: color,
                                                borderWidth: 2,
                                                }]} >
                                    <View style = {[styles.circle, {
                                        backgroundColor: color
                                    }]}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                {/*Cart button */}
                <TouchableOpacity
                     style = {styles.button}
                     onPress={() => {
                        handleAddToCart(item);
                     }}>
                    <Text style = {styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
                </ScrollView>
             </LinearGradient> 
    );
}

export default ProductDetails;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 50,
        padding: 20,
        paddingBottom: 50,
    },
    scrollContainer: {
        paddingTop: 50,
        padding: 20,
        paddingBottom: 100, // Add more space to show the button
    },
    coverImg:{
        width: "100%",
        height: 390, 
    },
    contentContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal: 20,
        marginVertical: 15,
    },
    title:{
        fontSize: 20,
        color: "#444444",
        fontWeight:"500",
    },
    price:{
        color: "#4D4C4C",
    },
    sizeText:{
        marginHorizontal: 20,
    },
    sizeContainer:{
        flexDirection:"row",
        marginHorizontal: 20,
    },
    sizeValueContainer:{
        height: 38,
        width: 36,
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,

    },
    sizeValue: {
        fontSize: 18,
        fontWeight: "600",

    },
    colorText:{
        marginHorizontal: 20,
        marginTop: 10, 
    },
    colorsContainer:{
        flexDirection: "row",
        marginHorizontal: 20,
    },
    circle:{
        height: 38,
        width: 36,
        borderRadius: 18, 
    },
    circleBorder:{
        height: 48,
        width: 48,
        marginHorizontal: 3,
        borderRadius: 22, 
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#E96E6E",
        height: 62,
        //alignItems: "center",
       // justifyContent: "center",
       padding: 10,
       margin: 10,
        borderRadius: 25,
       // marginTop: 20,
      },
      buttonText: {
        fontSize: 24,
        color: "#FFFFFF",
        fontWeight: "700",
        textAlign: "center",
       // fontFamily: fonts.regular,
      }
})