import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import CustomButton from '../../../components/atoms/buttoncomponent/button'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../../../constants/colors'
import Metrics from '../../../assests/Metrics'
import { useNavigation, useRoute } from '@react-navigation/native'
import PaymentCard from '../../molecules/customer/paymentcard'
import { useDispatch } from 'react-redux'
import * as homeAction from '../../../redux/actions/homeaction'



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


const OrderReceipt = () => {

    const navigation = useNavigation()
    const route=useRoute()
    const dispatch=useDispatch()
    const enableCard=route?.params?.enable
    const finalOrderData=route?.params?.params?.finalOrderData

    useEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Order Details',
            headerTitleAlign: 'center',
        })
    })

    const submitUserData=(finalOrderData)=>{
        console.log('start processing==--->')
        dispatch(homeAction.postCustomerData(finalOrderData)).then((data)=>{
            if(data.success){
                console.log("final order data==((>",data)
                dispatch(homeAction.handleTotal())
                Alert.alert('Order Palced Successfully!')
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    console.log("this data is comming from receipt page--->",finalOrderData)
    return (
        <View style={styles.mainScreen}>
            <View style={styles.billDetails}>
                <View style={styles.changeAddressContainer}>
                    <Text style={styles.headerTitle}>Address</Text>
                    <Text style={[styles.headerTitle,styles.changeTextStyle]}>CHANGE</Text>
                </View>
                <View style={styles.addressContainer}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name='home-outline' size={25} color={colors.CERVmaincolor} />
                    </View>
                    <Text style={styles.addressText}>374 william S Canning Blvd, Fall River MA 2721</Text>
                </View>
                <Text style={styles.billText}>Bill Details</Text>
                <ItemDetails
                    titleText={'Original Noodles'}
                    price={8}
                    // enableCounter={true}
                />
                <ItemDetails
                    titleText={'House Noodles'}
                    price={8.2}
                />
                <ItemDetails
                    titleText={'Service Charges'}
                    price={1.00}
                />
                {/* <ItemDetails
                    titleText={'Delivery Free'}
                    price={2.50}
                /> */}

                <View style={styles.CouponContainer}>
                    <Text style={styles.applyText}>Apply Coupon Code</Text>
                    <Text style={styles.checkText}>CHECK</Text>
                </View>
                <View style={styles.line} />
                {/* <ItemDetails
                    titleText={'Promo Discount'}
                    price={2.50}
                /> */}
                <View style={styles.line} />

                <ItemDetails
                    titleText={'Sub Total'}
                    price={19.2}
                />
                <View style={styles.line} />

                <ItemDetails
                    titleText={'Tax'}
                    price={5.10}
                />
                <View style={styles.line} />

                <ItemDetails
                    titleText={'Total'}
                    price={24.3}
                    titleTextStyle={styles.totalText}
                    totalPriceStyle={styles.totalText}
                />

               <View style={styles.paymentCardContainer}>
                    <PaymentCard
                        cardNumber={'**** **** **** 2356'}
                        expireDate={'03/24'}
                        checkcolor={'green'}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    title={'Make Payment'}
                    onPress={() => { submitUserData(finalOrderData) }}
                />
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        marginHorizontal: Metrics.CountScale(25)
    },
    headerTitle: {
        fontSize: Metrics.CountScale(20),
        fontWeight: "bold"
    },
    recepiPrice: {
        color: colors.black,
        fontWeight: 'bold'
    },
    quantityContainer: {
        flexDirection: 'row',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
     changeAddressContainer:{
         flexDirection:'row',
         justifyContent:'space-between'
     },
     changeTextStyle:{
        color:colors.CERVmaincolor,
        fontSize:Metrics.CountScale(17)
     },
     paymentCardContainer:{
        marginTop:Metrics.CountScale(20)
     }

})

export default OrderReceipt
