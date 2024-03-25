import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        Copyright © 2024 SHOPPEEZADA. All rights reserved.
        Founder & Co-founder : Andre Vince Reganon, Sam Syrille C. Tonggao & Jomar Yeri 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 10,
    paddingBottom: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default Footer