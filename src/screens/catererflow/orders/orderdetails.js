import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



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
const CurrentOrderDetails = () => {
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
                        <Text style={styles.billText}>Bill Details</Text>
                        <ItemDetails
                            titleText={'Noodles total(20 Plates)'}
                            price={210.80}
                        />
                        <ItemDetails
                            titleText={'Rice total(20 Plates)'}
                            price={270.80}
                        />
                        <ItemDetails
                            titleText={'Service Charges'}
                            price={1.00}
                        />
                        <ItemDetails
                            titleText={'Delivery Free'}
                            price={2.50}
                        />
                        <View style={styles.line} />
                        <ItemDetails
                            titleText={'Promo Discount'}
                            price={2.50}
                        />
                        <View style={styles.line} />

                        <ItemDetails
                            titleText={'Sub Total'}
                            price={547.10}
                        />
                        <View style={styles.line} />

                        <ItemDetails
                            titleText={'Tax'}
                            price={5.10}
                        />
                        <View style={styles.line} />

                        <ItemDetails
                            titleText={'Total'}
                            price={552.20}
                            titleTextStyle={styles.totalText}
                            totalPriceStyle={styles.totalText}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
            <View style={styles.orderDetailsText}>
                <TouchableOpacity style={[styles.cancelButtonContainer, styles.acceptButton]}>
                    <Text style={styles.cancelText}>Accept Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cancelButtonContainer, styles.rejectButton]}>
                    <Text style={styles.cancelText}>Reject Order</Text>
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
    },
    rejectButton: {
        backgroundColor: colors.reject
    },
    acceptButton: {
        backgroundColor: colors.accept
    },
    seperator: {
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.stronglighttext,
        marginVertical: Metrics.CountScale(10)
    },
    recepiText: {
        flexDirection: 'column',
        justifyContent: '',
        marginVertical: Metrics.CountScale(7)
    },
    cancelText: {
        color: colors.white
    },
    foodListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
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
    }

})

export default CurrentOrderDetails
