import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
import { Rating } from 'react-native-ratings'
import { Entypo } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import * as orderAction from '../../../redux/actions/order'
const CatererPastOrder = () => {


    const navigation = useNavigation()
    const [isRefreshing, setIsRefresing] = useState(true)
    const [error, setError] = useState(false)
    const pastOrderData = useSelector(state => state.order?.pastOrderData)
    console.log("my from screen data", pastOrderData)
    const dispatch = useDispatch()
    useEffect(() => {
        setIsRefresing(true);
        dispatch(orderAction.getPastOrderData())
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

    console.log(error)

    if (isRefreshing) {
        return (<View style={styles.emptyScreenText}>
            <ActivityIndicator size="large" color='black' />
        </View>)
    }

    if (pastOrderData.length === 0 || null) {
        return (
            <View style={styles.emptyScreenText}>
                <Text style={styles.text}>Please add Some Order!</Text>
            </View>)
    }

    console.log('pastOrderLog', pastOrderData)
    // const catererData = pastOrderData.catererInfo

    return (
        <View style={styles.mainScreen}>
            <FlatList
                data={pastOrderData}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.container}>
                            {item.userInfo.map((items, index) => (
                                <View style={styles.imageTextContainer}>
                                    <View style={styles.imageContainer}>
                                        <Image style={styles.image} source={{ uri: items.image }} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.titleText}>{items.name}</Text>
                                        <Text style={styles.addressText}>{items.address}</Text>
                                    </View>
                                </View>
                            ))}
                            <View style={styles.line} />
                            {item.order_items.map((item, index) => (<View style={styles.foodListContainer}>
                                <Text style={styles.text}>{item.food_name}</Text>
                                <Text style={styles.price}>{`$${(item.price * item.quantity).toFixed(2)}`}</Text>
                            </View>))}
                            <View style={styles.line} />
                            <View style={styles.orderDetailsText}>
                                <Text style={styles.orderTypeText}>Amount</Text>
                                <Text style={styles.typeSubText}>${item?.subtotal?.toFixed(2)}</Text>
                                <View style={styles.completedText}>
                                    <Entypo name='dot-single' size={30} color={item.status === "CANCELLED" || 'REJECTED' ? 'red' : 'green'} />

                                    <Text style={[styles.orderCompleteText, item.status === 'CANCELLED' || item.status === 'REJECTED' ? { color: 'red' } : null]}>
                                        {item.status === 'CANCELLED' || item.status === 'REJECTED' ? item.status : `Completed on ${item?.updated_at.substring(0, 10)} at 01:20 PM`}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.line} />

                        </View>
                    )
                }}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    emptyScreenText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainScreen: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    rating: {
        alignItems: 'flex-start',
    },
    foodListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },
    container:{
        flex: 1,
        marginHorizontal: Metrics.CountScale(20),
        // justifyContent: 'center',
        // alignItems: 'center',
        marginVertical:Metrics.CountScale(10),
        borderColor: colors.black,
        elevation:5,
        backgroundColor:colors.White,
        borderWidth:Metrics.CountScale(1.5),
        paddingHorizontal:Metrics.CountScale(20)
    }
    

})
export default CatererPastOrder
