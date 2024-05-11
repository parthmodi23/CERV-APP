import React from 'react'
import { StyleSheet,View,Text,TextInput } from 'react-native'
import Metrics from '../../../assests/Metrics'
import colors from '../../../constants/colors'

const CommonForminput = ({title,value,numberOfLines,placeholder,onChange,onBlur,secureTextEntry}) => {
  return (
  <View style={styles.mainScreen}>
    <Text style={styles.text}>{title}</Text>
    <TextInput
    numberOfLines={numberOfLines??1}
    style={styles.input}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    secureTextEntry={secureTextEntry}
    />
  </View>
  )
}

const styles=StyleSheet.create({
    mainScreen:{
        flex:1,
        // backgroundColor:'red'
    },
    input:{
        marginTop:Metrics.CountScale(5),
        borderBottomColor:colors.LightGrey,
        borderBottomWidth:Metrics.CountScale(1.5)
    },
    text:{
        // fontSize:Metrics.CountScale(10)
        marginTop:Metrics.CountScale(20),
        color:colors.lighttextcolor
    }

})

export default  CommonForminput

