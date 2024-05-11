import React from 'react'
import { StyleSheet, View ,Text, Pressable} from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../constants/colors'

const OrderCard = ({Title,onPress,bgcolor,textColor}) => {
  return (
    <View style={styles.mainScreen}>
        <Pressable onPress={onPress}>
        <View style={[styles.boxContainer,{backgroundColor:bgcolor}]}>
            <Text style={[styles.text,{color:textColor}]}>{Title}</Text>
        </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    mainScreen:{
        flex:1
    }, 
    boxContainer:{
        borderWidth:wp(0.1),
        height:hp(6),
        justifyContent:'center',
        alignItems:'center',
        borderColor:colors.lighttextcolor,
    },
    text:{
        fontWeight:'bold'
    }
})

export default OrderCard
