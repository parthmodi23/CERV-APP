import React, { useState } from 'react'
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../atome/buttoncomponent/button'
const { width, height } = Dimensions.get('window')


const RoleScreen = () => {

    const [selectedrole,setSelectedrole]=useState(false)

    return (
        <View style={styles.mainscreen}>
            <View style={styles.textcontainer}>
                <Text style={styles.maintext}>Select your Role</Text>
                <Text style={styles.subtext}>How do you want to use <Text style={styles.cervtext}>CERV?</Text> </Text>
            </View>
            <View style={styles.rolecontainer}>
            <TouchableOpacity style={styles.imagecontainer} onPress={()=>{setSelectedrole(prev=>!prev)}}>
                <View style={styles.outerline}>
                    <Image style={styles.image} source={require('../../assests/images/customer.png')} /></View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.imagecontainer} onPress={()=>{setSelectedrole(prev=>!prev)}}>
                <View style={styles.outerline}>
                    <Image style={styles.image} source={require('../../assests/images/caterer.png')} /></View>
            </TouchableOpacity>
        </View>
        <View>
            <CustomButton title={selectedrole?"I am a Customer":'I am A Caterer'}/>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    maintext:{
    fontSize:35,
    fontWeight:'500'

    },
    textcontainer:{
        marginHorizontal:10
    },
    subtext:{
        fontSize:17,
        color:'#454545',
        fontWeight:'bold',
    },
    image: {
        height:'85%',
        width:'100%',
        resizeMode:'contain',
        aspectRatio:3/2, 
        alignSelf:"center",
    },
    mainscreen: {
        flex: 1,
        },
    imagecontainer: {
        width: 150,
        height: 150,
        borderRadius:75,
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerline: {
        width: '90%',
        height: '90%',
        borderWidth: 2,
        borderRadius: 75,
        overflow: 'hidden',
    },
    rolecontainer:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    cervtext:{
        color:'#f5694e',
        fontWeight:'bold'
    }

})
export default RoleScreen
