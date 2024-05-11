import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Metrics from '../../../assests/Metrics'
const DCustomButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} disabled={props.disabled} >
            <View style={[styles.Button, props.style]}>
                <Text style={[styles.ButtonText,props.textStyle]} >{props.children}</Text>
                <View style={styles.iconContainer}>
                    <AntDesign name='arrowright'  size={18} color='white' onPress={() => { }} />
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Button: {
        width: Metrics.CountScale(300),
        margin: Metrics.CountScale(12),
        height: Metrics.CountScale(60),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        borderRadius: Metrics.CountScale(12),
        padding: Metrics.CountScale(15),
        alignSelf: 'center',
        flexDirection: 'row'
    },
    ButtonText: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        left: Metrics.CountScale(10),
        color: 'white',
        fontWeight:'bold'
    },
    iconContainer: {
        borderColor: 'black',
        width: Metrics.CountScale(30),
        height: Metrics.CountScale(30),
        justifyContent: 'center',
        borderRadius: Metrics.CountScale(50),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#63B5F7'
    }
})
export default DCustomButton