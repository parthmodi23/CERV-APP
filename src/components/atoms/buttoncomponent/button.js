import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, style,disable }) => {
  return (
    <TouchableOpacity style={[styles.button, style]}  disabled={disable} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f5694e',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
