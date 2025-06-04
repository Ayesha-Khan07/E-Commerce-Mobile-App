import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, TouchableOpacity } from 'react-native';

function Category({ item, selectedCategory, setselectedCategory }) {
    return (
       <TouchableOpacity onPress={ () => setselectedCategory(item)}>
            <Text
               style={[
                styles.categoryText,
                selectedCategory === item && {
                    color: "#FFFFFF",
                    backgroundColor: "#E96E6E",
                 },
               ]}>
                 {item} 
            </Text>
       </TouchableOpacity>
    );
}

export default Category;

const styles = StyleSheet.create({
    categoryText:{
        fontSize: 16,
        fontWeight: "600",
        //color: "#FFFFFF",
        color: "#938F8F",
        backgroundColor: "#DFDCDC",
        //backgroundColor: "#E96E6E",
        //padding: 10,
        textAlign: "center",
        borderRadius: 16, 
        marginHorizontal: 10, 
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
    
})