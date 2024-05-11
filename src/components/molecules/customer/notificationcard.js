import { MaterialCommunityIcons } from '@expo/vector-icons'
import { BaseNavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import colors from '../../../constants/colors'
const NotificationCard = ({iconBgColor,time,iconname,text}) => {
    return (
        <View style={styles.mainScreen}>
            <View style={styles.cardContainer}>
                <View style={{ ...styles.icon, backgroundColor:iconBgColor}}>
                    <MaterialCommunityIcons name={iconname} size={25} color={colors.white} />
                </View>
                <Text style={styles.text} numberOfLines={2}>{text}</Text>
                <Text style={styles.time}>{time}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        elevation:3,
    },
    cardContainer: {
        height: hp(12),
        width: wp('50%'),
        flexDirection: 'row',
        backgroundColor:colors.white,      

    },
    icon: {
        borderRadius: wp(50),
        marginVertical: wp(4),
        marginHorizontal:wp(2),
        padding: wp(5),
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    time:{
        marginTop:hp(1),
        marginHorizontal:wp(3),
        color:colors.lighttextcolor
    }
})

export default NotificationCard
