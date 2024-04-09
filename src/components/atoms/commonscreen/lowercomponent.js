import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')

const LowerComponent = ({ children, style }) => {
  return (
    <View style={[styles.lowercontainer, style]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  lowercontainer: {
    height: height * 0.7,
    width: width,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    paddingHorizontal: 10,
    paddingTop: 10
  },

})

export default LowerComponent
