import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LowerComponent = ({children,style}) => {
  return (
    <View style={[styles.lowercontainer,style]}>
        {children}
    </View>
  )
}

const styles=StyleSheet.create({
        lowercontainer: {
            height: '70%',
            backgroundColor: '#ffffff',
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            paddingHorizontal:10,
            paddingTop:10
          },
    
})

export default LowerComponent
