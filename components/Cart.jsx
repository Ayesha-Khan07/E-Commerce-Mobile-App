import { LinearGradient } from 'expo-linear-gradient';
import { useContext } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CartCard from './CartCard';
import Header from './Header';

import { CartContext } from './cartContext';

export default function Cart() {
    const {carts, totalPrice, deleteItemFromCart, updateQuantity} = useContext(CartContext);
  return (
   <LinearGradient
                       colors={['#FDF0F3', '#FFFBFC']} 
                       style={styles.container}>
        <View style = {styles.headerContainer}>
             <Header isCart={true}/> 
        </View>

        <FlatList 
            data = {carts}
            ListHeaderComponent={<></>}
            renderItem={({item}) => <CartCard 
                                        item = {item} 
                                        deleteItemFromCart = {deleteItemFromCart}
                                        updateQuantity={updateQuantity}/>}

            ListFooterComponent={<>
                 <View style={styles.priceContainer}>
                 <View style={styles.priceAndTitle}>
                  <Text  style={styles.text}> Total: </Text>
                  <Text  style={styles.text}> Rs. {totalPrice} </Text>
               </View>
               <View style={styles.priceAndTitle}>
                  <Text  style={styles.text}> Shipping: </Text>
                  <Text  style={styles.text}> Rs. 0.0 </Text>
              </View>
            </View>
             <View style = {styles.divider} /> 
              <View style={styles.priceAndTitle}>
                <Text  style={styles.text}> Grand Total: </Text>
                <Text  style={[styles.text, {color:"black", fontWeight: "700"}]}> Rs. {totalPrice} </Text>
            </View>
             </>}
             showsVerticalScrollIndicator={false} 
             contentContainerStyle = {{
                paddingBottom: 100,
             }}/> 
      
       <TouchableOpacity style={styles.checkoutContainer}>
            <Text style={styles.buttonText}>Checkout</Text>
       </TouchableOpacity>

    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    headerContainer:{
        marginBottom: 20,
    },
    container:{
        flex:1,
        padding: 15,
    },
    priceContainer:{
        marginTop: 40,
    },
    priceAndTitle:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    text:{
        color:"#757575",
        fontSize: 18,
    },
    divider:{
        borderWidth: 1,
        borderColor: "#C0C0C0",
        marginVertical: 10,
    },
    checkoutContainer:{
        backgroundColor: "#E96E6E",
        width: "100%",
        marginVertical: 10,
        borderRadius: 12,
    },
    buttonText:{
        fontSize: 25,
        color: "white",
        textAlign: "center",
        padding: 10,
    }
})
