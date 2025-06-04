import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Fontisto from "react-native-vector-icons/Fontisto";

import Category from './components/Category';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import data from './components/data/data.json';

import { useEffect, useState } from 'react';

const categories = ['All', 'Trending Now', 'New','Women']
export default function Home(props){

  const [products, setProducts] = useState(data.products);
  const [selectedCategory, setselectedCategory] = useState('All');
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (selectedCategory === 'All' || selectedCategory === null)
    {
      setProducts(data.products);
    } 
    else if (selectedCategory === 'Trending Now')
    {
      setProducts(data.products.slice(2, 6));
    } 
    else if (selectedCategory === 'New') 
    {
      setProducts([data.products[2], data.products[4]]); 
    }
    else if (selectedCategory === 'Women') 
    {
      setProducts(data.products); 
    }
    else
    {
      setProducts([]); 
    }
  }, [selectedCategory]);

  const handleLiked = (item) => {
    const newProducts = products.map((prod) => {
      if(prod.id === item.id){
        return{
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  };
  return(
    <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']} 
        style={styles.container}>
          <Header/>

            {/*Products list*/}
            <FlatList 
              numColumns={2}
              ListHeaderComponent={
                <>
                 <Text style={styles.headingText}>Click and Shop</Text>
                        {/*Input container*/}
                <View style = {styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Fontisto name={"search"} size={26} color={"#C0C0C0"}/>
                 </View>
                 <TextInput style={styles.textInput} placeholder='Search here'/>
                </View>
                       {/*Category section*/}
                <FlatList 
                   data={categories}
                   renderItem={({ item }) => (
                     <Category 
                         item = {item}
                         selectedCategory = {selectedCategory}
                         setselectedCategory = {setselectedCategory}/>
                    )}
               keyExtractor={(item) => item}
               horizontal = {true}
               showsHorizontalScrollIndicator = {false}/>

                </>
              } 
              data = {products}
              renderItem={({item, index}) => <ProductCard 
                                                item = {item}
                                                handleLiked = {handleLiked} />}
              showsVerticalScrollIndicator = {false}
              keyExtractor={(item) => item.id}
              contentContainerStyle = {{
                paddingBottom: 150,
              }}
              />
          {/* <View style ={{
              flexDirection: "row",
              }}>
            <ProductCard />
            <ProductCard />
          </View> */}

   </LinearGradient>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      padding: 20,
    },

    headingText:{
      fontSize: 28,
      color: "#000000",
      marginTop: 15,
      //paddingLeft: 20,
    },

    inputContainer:{
      backgroundColor: "#FFFFFF",
      height: 50,
      borderRadius: 12,
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 20,
    },

    iconContainer:{
      marginHorizontal: 15,
    },

    textInput:{
      flex: 1,
    },


});
