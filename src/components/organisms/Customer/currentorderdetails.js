import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, Alert } from 'react-native'
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import * as orderAction from '../../../redux/actions/order'
import { useNavigation, useRoute } from '@react-navigation/native'




const ItemDetails = ({ titleText, numberOfDish, enableCounter, price, totalPriceStyle, enableSubText, titleTextStyle, quantity, handleDecrement, handleIncrement }) => {
    return (
        <View style={styles.foodListContainer}>
            <View style={styles.recepiText}>
                <Text style={[styles.titleRecepiText, titleTextStyle]}>{titleText}</Text>
                {enableSubText && <Text style={styles.subRecepiText}>{numberOfDish} Dishes</Text>}
            </View>
            <View style={styles.quantityContainer}>
                {enableCounter && (<View style={styles.counterContainer}>
                    <MaterialCommunityIcons name='minus' size={25} color={colors.reject} onPress={handleDecrement} />
                    <Text style={styles.counterText}>{quantity}</Text>
                    <MaterialCommunityIcons name='plus' size={25} color={colors.success} onPress={handleIncrement} />
                </View>)}

                <Text style={[styles.recepiPrice, totalPriceStyle]}>${price}</Text>
            </View>
        </View>
    )
}


const BillText = ({ quantity, titleText, pricetitleTextStyle, totalPriceStyle, titleTextStyle, enableSubText, numberOfDish, price }) => {
    return (
        <View style={styles.foodListContainer}>
            <View style={styles.recepiText}>
                <Text style={[styles.titleRecepiText, titleTextStyle]}>{titleText} ({quantity} Dishes)</Text>
                {enableSubText && <Text style={styles.subRecepiText}>{numberOfDish} Dishes</Text>}
            </View>
            <View>
                <Text style={[styles.recepiPrice, totalPriceStyle]}>${price}</Text>
            </View>
        </View>

    )
}

const CurrentOrderDetails = () => {

    const [isRefreshing, setIsRefresing] = useState(true)
    const [error, setError] = useState(false)
    const route = useRoute()
    const navigation=useNavigation()
    const currentOrderDetails = route?.params?.item
    const currentOrderData = route?.params?.item
    console.log("my from screen data", currentOrderData)
    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            title:'Details  '
        })
        setIsRefresing(true);
        dispatch(orderAction.getCurrentOrderData())
            .then((data) => {
                setError(false);
                // setIsRefresing(false)
                console.log("screen log", data);
                console.log('success');
            })
            .catch((err) => {
                setError(true);
                Alert.alert(err);
            })
            .finally(() => {
                setIsRefresing(false); // Set isRefreshing to false after the action completes
            });
    }, []);
    console.log("current order details from the route", currentOrderDetails)
    console.log(error)

    if (isRefreshing) {
        return (<View style={styles.indicator}>
            <ActivityIndicator size="large" color='black' />
        </View>)
    }
    const catererData = currentOrderData.catererInfo
    console.log(catererData)


    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.mainScreen}>
                {catererData.map((item, index) => (
                    <View style={styles.imageTextContainer} key={item.id}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: item?.image }} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>{item?.name}</Text>
                            <Text style={styles.addressNewText}>{item?.address}</Text>
                        </View>
                    </View>
                ))}

                <View style={styles.line} />
                <View>
                    <FlatList
                        data={currentOrderData.order_items}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.foodListNewContainer}>
                                    <View style={styles.recepiTextNew}>
                                        <View>
                                            <Text style={styles.text}>{item?.food_name}</Text>
                                            <Text style={styles.subRecepiText}>{item?.quantity}</Text>
                                        </View>
                                        <Text style={styles.price}>{`$${(item?.price * item?.quantity).toFixed(2)}`}</Text>
                                    </View>
                                </View>)
                        }}
                    />
                </View>
                <View style={styles.line} />
                <View style={styles.orderDetailsText}>
                    <Text style={styles.orderTypeText}>ORDER TYPE</Text>
                    <Text>{currentOrderData?.order_type}</Text>
                    <Text style={styles.orderTypeText}>Delivery fee based on how far the customer Location</Text>
                    <Text>*  5 km distance charge $2.50</Text>
                    <Text>*  10 km distance charge $5.10</Text>
                    <Text style={styles.orderTypeText}>ORDER ON</Text>
                    <Text>{currentOrderData?.created_at.substring(0, 10)}</Text>
                    <Text style={styles.orderTypeText}>Amount</Text>
                    <Text style={styles.typeSubText}>${currentOrderData?.total_amount.toFixed(2)}</Text>
                </View>
                <View style={styles.line} />
                <View>
                    <Text style={styles.orderTypeText}>Delivery Date and Time</Text>
                    <Text>{currentOrderData?.delivery_datetime}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.chatcontainer}>
                    <View>
                        <Text>Delivery Person</Text>
                        <Text style={styles.titleText}>John Martyn</Text>
                    </View>
                    <TouchableOpacity style={styles.cancelButtonContainer}>
                        <Text style={styles.cancelText}>Chat</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={styles.titleText}>Bill Details</Text>

                <View>
                    <FlatList
                        data={currentOrderData.orderItems}
                        keyExtractor={(item) => item?.id}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <BillText
                                        titleText={item?.food_name}
                                        quantity={item?.quantity}
                                        price={(item?.quantity * item?.price)}
                                    />
                                </View>
                            )
                        }}
                    />
                </View>
                <ItemDetails
                    titleText={'Service Charges'}
                    price={currentOrderData?.service_charge}
                />
                <ItemDetails
                    titleText={'Delivery Fee'}
                    price={2.50}
                />
                <ItemDetails
                    titleText={'Promo Discount'}
                    price={currentOrderData?.promo_discount}
                />
                <View style={styles.line} />

                <ItemDetails
                    titleText={'Sub Total'}
                    price={currentOrderData?.subtotal.toFixed(2)}
                />
                <View style={styles.line} />

                <ItemDetails
                    titleText={'Tax'}
                    price={currentOrderData?.tax_charge?.toFixed(2)}
                />
                <View style={styles.line} />

                <ItemDetails
                    titleText={'Total'}
                    price={currentOrderData?.total_amount?.toFixed(2)}
                    titleTextStyle={styles.totalText}
                    totalPriceStyle={styles.totalText}
                />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingHorizontal: Metrics.CountScale(10)
    },
    indicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    recepiText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Metrics.CountScale(7)
    },
    foodListContainer: {
        marginVertical: Metrics.CountScale(10)
    },
    imageTextContainer: {
        flexDirection: 'row',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
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
    BillTitle: {

    },
    titleText: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(17),
    },
    addressNewText: {
        color: colors.lighttextcolor,
        fontSize: Metrics.CountScale(17),
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
        marginTop: Metrics.CountScale(10)
    },
    cancelButtonContainer: {
        marginHorizontal: Metrics.CountScale(20),
        marginTop: Metrics.CountScale(10),
        backgroundColor: colors.CERVmaincolor,
        paddingVertical: Metrics.CountScale(10),
        paddingHorizontal: Metrics.CountScale(15),
        borderRadius: Metrics.CountScale(10),
    },
    chatcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    foodListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    recepiText: {
        flexDirection: 'column',
        // justifyContent: '',
        marginVertical: Metrics.CountScale(7)
    },
    billText: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(20)
    },
    totalText: {
        fontWeight: '900',
        fontSize: Metrics.CountScale(17)
    },
    iconContainer: {
        padding: Metrics.CountScale(5),
        borderColor: colors.CERVmaincolor,
        borderWidth: Metrics.CountScale(1.1),
        borderRadius: Metrics.CountScale(5),
        marginVertical: Metrics.CountScale(10)
    },
    addressText: {
        width: Metrics.CountScale(250),
        marginLeft: Metrics.CountScale(10)
    },
    line: {
        borderTopWidth: Metrics.CountScale(1.5),
        borderTopColor: colors.stronglighttext,
        marginVertical: Metrics.CountScale(5)
    },
    billDetails: {
        flex: 1
    },
    buttonContainer: {
        marginBottom: Metrics.CountScale(20)
    },
    counterContainer: {
        flexDirection: 'row',
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.lighttextcolor,
        alignItems: 'center',
        marginRight: Metrics.CountScale(20)

    },
    counterText: {
        marginHorizontal: Metrics.CountScale(9)
    },
    CouponContainer: {
        flexDirection: 'row',
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.GreyColor,
        justifyContent: 'space-between',
        marginVertical: Metrics.CountScale(10),
        paddingVertical: Metrics.CountScale(10)
    },
    applyText: {
        marginHorizontal: Metrics.CountScale(10)
    },
    checkText: {
        color: colors.CERVmaincolor,
        marginHorizontal: Metrics.CountScale(10)

    },
    changeAddressContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    changeTextStyle: {
        color: colors.CERVmaincolor,
        fontSize: Metrics.CountScale(17)
    },
    paymentCardContainer: {
        marginTop: Metrics.CountScale(20)
    },
    subRecepiText: {
        color: colors.GreyColor
    },
    titleRecepiText: {
        fontWeight: 'bold'
    },
    foodListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    recepiTextNew: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: Metrics.CountScale(10)
    },
    foodListNewContainer: {
        flexDirection: 'column'
    }
})


export default CurrentOrderDetails
