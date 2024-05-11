import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
import { Rating } from 'react-native-ratings'
import { Entypo } from '@expo/vector-icons'
const CatererPastOrder = () => {
    return (
        <View style={styles.mainScreen}>
            <View style={styles.imageTextContainer}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require('../../../assests/images/customer.jpg')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>St John & St Thomas Catering</Text>
                    <Text style={styles.addressText}>2333 williom Street,Ma park</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.foodListContainer}>
                <View style={styles.recepiText}>
                    <Text style={styles.text}>House Noodle</Text>
                    <Text style={styles.price}>$271.80</Text>
                </View>
                <View style={styles.recepiText}>
                    <Text style={styles.text}>fried Rice</Text>
                    <Text style={styles.price}>$151.80</Text>
                </View>
            </View>
            <View style={styles.line} />
            <View style={styles.orderDetailsText}>
                <Text style={styles.orderTypeText}>Amount</Text>
                <Text style={styles.typeSubText}>$543.60</Text>
                <View style={styles.completedText}>
                    <Entypo name='dot-single' size={30} color={'green'} />
                    <Text style={styles.orderCompleteText}>Completed on <Text>21/10/2020</Text> at <Text>01:20 PM</Text></Text>
                </View>
            </View>
            <View style={styles.line} />


        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    rating: {
        alignItems: 'flex-start',
    },
    foodListContainer: {
        marginVertical: Metrics.CountScale(10)
    },
    recepiText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Metrics.CountScale(7)
    },
    imageTextContainer: {
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    imageContainer: {
        height: Metrics.CountScale(50),
        width: Metrics.CountScale(50),
        marginVertical: Metrics.CountScale(20),
        marginRight: Metrics.CountScale(10),
    },
    textContainer: {
        justifyContent: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(17),
    },
    addressText: {
        color: colors.lighttextcolor,
        fontSize: Metrics.CountScale(17)
    },
    line: {
        borderTopWidth: Metrics.CountScale(1.5),
        borderTopColor: colors.stronglighttext
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderDetailsText: {
        marginVertical: Metrics.CountScale(20),
    },
    text: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(15)
    },
    price: {
        color: colors.lighttextcolor
    },
    orderTypeText: {
        color: colors.lighttextcolor,
        // marginTop: Metrics.CountScale(10)
    },
    cancelButtonContainer: {
        marginHorizontal: Metrics.CountScale(20),
        marginTop: Metrics.CountScale(10),
        backgroundColor: colors.CERVmaincolor,
        padding: Metrics.CountScale(10),
    },
    orderCompleteText: {
        color: colors.success,
        alignSelf: 'center'
    },
    customerReviewContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: Metrics.CountScale(15)
    },
    reviewText: {
        color: 'blue'
    },
    completedText: {
        marginTop: Metrics.CountScale(10),
        flexDirection: 'row',
    }

})
export default CatererPastOrder
