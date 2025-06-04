import {createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        loadCartItems();
    }, []);

    const loadCartItems = async() => {
        let carts = await AsyncStorage.getItem("carts");
        carts = carts ? JSON.parse(carts) : [];
        setCarts(carts);
        totalSum(carts);
    }

    const addToCart = async (item) =>{
        const itemExist = carts.findIndex((cart) => cart.id === item.id);
        let newCartItems = [];

        if(itemExist === -1)
        {
          newCartItems = [...carts, { ...item, quantity: 1 }];
        }
        else{
            // If item exists, increase quantity
            newCartItems = carts.map((cart, index) =>
            index === itemIndex ? { ...cart, quantity: cart.quantity + 1 } : cart);
        }
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
        setCarts(newCartItems);
        totalSum(newCartItems);
    };

    const updateQuantity = async (item, type) => {
        let newCartItems = carts.map(cart => {
          if (cart.id === item.id) {
            const updatedQty = type === 'increase' ? cart.quantity + 1 : cart.quantity - 1;
            return { ...cart, quantity: updatedQty };
          }
          return cart;
        }).filter(cart => cart.quantity > 0); 
      
        await AsyncStorage.setItem("carts", JSON.stringify(newCartItems));
        setCarts(newCartItems);
        totalSum(newCartItems);
      };      

    const deleteItemFromCart = async (item) => {
        const newItems = carts.filter((cart) => cart.id !== item.id);
        await AsyncStorage.setItem("carts", JSON.stringify(newItems));
        setCarts(newItems);
        totalSum(newItems);
    };

    const totalSum = (carts) =>{
        const totalSum = carts.reduce((amount, item) => amount + (item.price * item.quantity), 0);
        setTotalPrice(totalSum);
    };

    const value = {
        carts,
        addToCart,
        totalPrice,
        deleteItemFromCart,
        updateQuantity,
    };
    return <CartContext.Provider value = {value} > {children} </CartContext.Provider>
}
