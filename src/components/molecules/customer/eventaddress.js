import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
const EventAddress = () => {
    return (
        <View style={styles.mainScreen}>
            <Text style={styles.eventText}>My Event Location</Text>
            <View style={styles.addressContaiener}>
                <Text style={styles.addressText}>374 Williom S Canning Blvd</Text>
                <MaterialCommunityIcons name='menu-down' size={25} color={colors.arrowColor} /></View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        margin: wp(4)
    },
    eventText: {
        color: colors.lighttextcolor,
        fontSize: hp(1.8),
        fontWeight: '700'
    },
    addressText: {
        fontSize: hp(1.8),
        fontWeight: 'bold'
    },
    addressContaiener: {
        flexDirection:'row',
        alignItems:'center'
    }
})
export default EventAddress
