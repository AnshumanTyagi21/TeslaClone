import React from 'react';
import { render } from 'react-dom';
import {Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton/Index'
import styles from "./Style";

const CarItem = () => {
    return(
        <View style={styles.carContainer}>
        
        <ImageBackground 
        style={styles.imageBackground}
        source={require('../../assets/ModelS.jpeg')}
        />

        <View style={styles.titles}>
          
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>
        </View>

        <StyledButton 
        type="primary" 
        content="Custom Order" 
        onPress={() => {
          console.log('Custom Order was Pressed')
        }}/>

        <StyledButton 
        type="secondary" 
        content="Existing Inventory" 
        onPress={() => {
          console.log('Existing Inventory was Pressed')
        }}/>

      </View>
    )
}
   
export default CarItem;