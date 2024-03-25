import { View, Text,  Image, StyleSheet } from 'react-native'
import React from 'react'
import shoppeezada from '../../assets/shoppeezada.jpg'

const Header = () => {
  return (
    <View style= {styles.header}>

        <Image source={shoppeezada} style={styles.logoheader}/>
        <Text style={styles.HeaderTitle}>Team-Focused</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 120,
        paddingTop: 20,
        alignItems: 'center',
      
    },
    logoheader: {
      width: 80,
      height: 80
    },
    HeaderTitle: {
      alignItems: 'center',
      justifyContent: 'center', 
    }

   
  });

export default Header