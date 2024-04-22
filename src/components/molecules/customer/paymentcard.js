import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import colors from '../../../constants/colors'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'

const PaymentCard = ({imageUri,cardNumber,expireDate}) => {
    return (
        <View style={styles.mainScreen}>
            <View style={styles.cardContainer}>
                <View style={styles.imagecontainer}>
                    <Image style={styles.image} source={{ uri: imageUri||'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png' }} />
                </View>
                <View style={styles.textContainer}>
                    <View style={styles.cardNumberContainer}>
                        <Text style={styles.cardNumber}>{cardNumber}</Text>
                        <MaterialCommunityIcons name='square-edit-outline' size={24} color={colors.checkcolor} />
                    </View>
                    <View style={styles.expiresDataContainer}>
                        <Text style={styles.expireText}>Expires</Text>
                        <Text style={styles.expireText}>{expireDate}</Text>
                    </View>
                </View>
                <View style={styles.icon}>
                    <MaterialCommunityIcons name='check-circle' size={30} color={"green"} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        marginHorizontal: 10,
        justifyContent: 'center',
        textAlign: 'center'
    },
    cardContainer: {
        height: 100,
        flexDirection: 'row',
        elevation: 3,
        backgroundColor: colors.white
    },
    imagecontainer: {
        width: wp(13),
        height: hp(10),
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: 'center',
        marginHorizontal: wp(3)
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        marginHorizontal:wp(2),
        marginVertical:hp(2)
    },
    cardNumberContainer: {
        flexDirection: 'row',
    },
    expiresDataContainer: {
        flexDirection: 'row',
        color: colors.lighttextcolor
    },
    expireText: {
        color: colors.lighttextcolor,
        marginHorizontal: wp(1),
        fontSize: hp(1.7),
        fontWeight:'bold'
    },
    icon: {
        justifyContent: 'center',
        marginHorizontal: wp(3)
    },
    cardNumber: {
        fontSize: hp(2),
        marginHorizontal:wp(1),
        fontWeight:'bold'
    }

})

export default PaymentCard
