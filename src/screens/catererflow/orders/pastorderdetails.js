import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Rating } from 'react-native-ratings'
import { Entypo } from '@expo/vector-icons'



const ItemDetails = ({ titleText, numberOfDish, price, totalPriceStyle, enableSubText, titleTextStyle }) => {
    return (
        <View style={styles.foodListContainer}>
            <View style={styles.recepiText}>
                <Text style={[styles.titleRecepiText, titleTextStyle]}>{titleText}</Text>
                {enableSubText && <Text style={styles.subRecepiText}>{numberOfDish} Dishes</Text>}
            </View>
            <Text style={[styles.recepiPrice, totalPriceStyle]}>${price}</Text>
        </View>
    )
}

// const BillDetials = ({ billTitle, price }) => {
//     return (
//         <View style={styles.billDetailsContainer}>
//             <Text style={styles.billTitleText}>{billTitle}</Text>
//             <Text style={styles.billPriceText}>${price}</Text>

//         </View>
//     )
// }
const PastOrderDetails = () => {
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={styles.mainScreen}>
                    <View style={[styles.imageTextContainer, styles.containerSpacing]}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={require('../../../assests/images/customer.jpg')} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>St John & St Thomas Catering</Text>
                            <Text style={styles.addressText}>2333 williom Street,Ma park</Text>
                            <Text style={styles.addressText}>22/01/24</Text>
                        </View>
                    </View>
                    <View style={styles.completedTextContainer}>
                        <Entypo name='dot-single' size={30} color={'green'} />
                        <Text style={styles.orderCompleteText}>Completed on <Text>21/10/2020</Text> at <Text>01:20 PM</Text></Text>
                    </View>
                    <View style={styles.seperator} />
                    <View style={[styles.containerSpacing]}>
                        <Text style={styles.orderTypeText}>Order Type</Text>
                        <Text style={styles.orderType}>Delivery</Text>
                    </View>
                    <View style={styles.seperator} />
                    <View style={[styles.containerSpacing]}>
                        <Text style={styles.orderTypeText}>Order Items Details</Text>
                        <ItemDetails
                            titleText={'House Noodles'}
                            numberOfDish={20}
                            price={220}
                            enableSubText={true}
                        />
                        <ItemDetails
                            titleText={'Fried Rice'}
                            numberOfDish={10}
                            price={110}
                            enableSubText={true}
                        />
                    </View>
                    <View style={styles.seperator} />
                    <View style={[styles.containerSpacing]}>
                        <Text style={styles.billText}>Rate and Review</Text>
                        <View style={styles.CustomerNameContainer}>
                            <Text>Nathan McCullam</Text>
                            <Text>20/11/2020</Text>
                        </View>
                        <Rating
                            type='star'
                            ratingCount={5}
                            imageSize={20}
                            style={styles.rating}
                            readonly={true}
                            // fractions={1}
                            minValue={0}
                            startingValue={2}
                            onFinishRating={(rating) => ratingCompleted(rating)}

                        />
                        <Text> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,ith the release of Leum.</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.orderDetailsText}>
                <TouchableOpacity style={[styles.cancelButtonContainer, styles.acceptButton]}>
                    <Text style={styles.viewInvoicetText}>View Invoice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cancelButtonContainer, styles.rejectButton]}>
                    <Text style={styles.cancelText}>Send Invoice</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainScreen: {
        flex: 1,
        backgroundColor:colors.white
    },
    rejectButton: {
        backgroundColor: colors.CERVmaincolor
    },
    acceptButton: {
        backgroundColor: colors.white,
        borderColor: colors.CERVmaincolor,
        borderWidth: Metrics.CountScale(1.4)
    },
    rating: {
        alignItems: 'flex-start',
    },
    orderCompleteText:{
        color:colors.success
    },
    seperator: {
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.stronglighttext,
        marginVertical: Metrics.CountScale(10)
    },
    completedTextContainer:{
        flexDirection: 'row',
        alignItems:'center',
        marginHorizontal:Metrics.CountScale(15)
    },
    recepiText: {
        flexDirection: 'column',
        justifyContent: '',
        marginVertical: Metrics.CountScale(7)
    },
    CustomerNameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancelText: {
        color: colors.white
    },
    foodListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageTextContainer: {
        flexDirection: 'row',
        marginHorizontal: Metrics.CountScale(20)
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    imageContainer: {
        height: Metrics.CountScale(60),
        width: Metrics.CountScale(60),
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
        borderTopColor: colors.stronglighttext,
        marginVertical: Metrics.CountScale(5)
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    orderDetailsText: {
        marginVertical: Metrics.CountScale(10),
        flexDirection: 'row',
        justifyContent: 'center'
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
        fontSize: Metrics.CountScale(15)
    },
    orderType: {
        fontSize: Metrics.CountScale(20),
        marginVertical: Metrics.CountScale(5)
    },
    cancelButtonContainer: {
        marginHorizontal: Metrics.CountScale(20),
        paddingHorizontal: Metrics.CountScale(35),
        paddingVertical: Metrics.CountScale(10)
    },
    itemDetailsContainer: {

    },
    recepiPrice: {
        color: colors.black,
        fontWeight: 'bold'

    },
    subRecepiText: {
        color: colors.GreyColor
    },
    titleRecepiText: {
        fontWeight: 'bold'
    },
    billDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerSpacing: {
        marginHorizontal: Metrics.CountScale(20)
        
    },
    billText: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(20)
    },
    totalText: {
        fontWeight: '900'
    },
    viewInvoicetText: {
        color: colors.CERVmaincolor
    }


})

export default PastOrderDetails
