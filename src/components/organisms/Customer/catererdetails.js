import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert, Button, FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native'
import CatererCard from '../../molecules/customer/caterercard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation, useRoute } from '@react-navigation/native'
import FormInput from '../../atoms/commonforminput/forminput'
import { RadioButton } from 'react-native-paper'
import colors from '../../../constants/colors'
import Metrics from '../../../assests/Metrics'
import CatererSubCategoryCard from './caterersubcategorycard'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as homeAction from '../../../redux/actions/homeaction'
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons'
import order from '../../../redux/reducer/order'

const CatererRecipeDetails = () => {

    const [isRefreshing, setIsRefresing] = useState(false)
    const [isSubDataLoaded, setIsSubDataLoaded] = useState(false)
    const [error, setError] = useState(false)
    const [showData, setShowData] = useState(false)
    const [catererSubData, setCatererSubData] = useState(null)
    const [isChecked, setIsChecked] = useState('delivery');
    const [subCategoryData, setSubCategoryData] = useState(null)
    const [showCounter, setShowCounter] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const route = useRoute()
    const catererId = route.params?.params?.catererId
    console.log(catererId)

    useEffect((itemId) => {
        setIsRefresing(true);
        dispatch(homeAction.getSingleCatererData(catererId))
            .then((data) => {
                setError(false);
                console.log("screen log", data);
                setSubCategoryData(data)
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


    const handleSubcategoryData = (itemId) => {
        console.log("subcategory item id", itemId)
        setIsSubDataLoaded(true);
        dispatch(homeAction.getSubCategoryData(itemId))
            .then((data) => {
                setError(false);
                setCatererSubData(data)
                console.log("screen log", data);
                // setSubCategoryData(data)
                console.log('success');
            })
            .catch((err) => {
                setError(true);
                Alert.alert(err);
            })
            .finally(() => {
                setIsSubDataLoaded(false); // Set isRefreshing to false after the action completes
            });

    }

    // //  if(catererSubData){
    //     const subCateData = useSelector(state=>state.home.subcategoryData)

    //  console.log("sub category data",subCateData)
    //  }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();

    console.log("caterer sub category Data is here", catererDetails)
    const catererDetails = useSelector(state => state.home.singleCaterer)
    console.log("caterer Details is herer", catererDetails)

    const handleRadioButtonChange = (value) => {
        setIsChecked(value);
    };

    const handleAddButton = async (id) => {

        console.log("touch id is here", id)
        dispatch(homeAction.slectedProductData(id))
        // console.log(id)
        // setShowCounter(id)
    }

    const handleIncrementProduct = (itemId, price) => {
        console.log("addingid", itemId)
        dispatch(homeAction.incrementCounter(itemId, price)); // Pass the price here
    }
    const handleDecrementProduct = (itemId, price) => {
        console.log("deleting id", itemId)

        dispatch(homeAction.decrementCounter(itemId, price)); // Pass the price here
    }

    const homereducer = useSelector(state => state?.home);
    const orderItem = (homereducer?.orderItem || [])
    const totalPrice = (homereducer?.totalPrice || 0)
    const getProductQuantity = (productId) => {
        const product = orderItem ? orderItem.find(item => item?.productId === productId) : null;
        return product ? product.quantity : 0;
    };

    console.log("order Item is here last",orderItem)
    const mydata = [
        {
            id: 1,
            titel: 'ggt',
            count: 2
        },
        {
            id: 2,
            title: 'll',
            count: 5
        },
        {
            id: 3,
            title: 'oo',
            count: 45
        }
    ]
    const foodData = [
        { id: 1, title: "House Noodles", subtitle: "Sliced Beef, Braised Lamb, BBQ Chicken", price: 13.39 },
        { id: 2, title: "Spicy Garlic Noodles", subtitle: "Shrimp, Garlic, Chili Flakes", price: 11.99 },
        { id: 3, title: "Vegetarian Chow Mein", subtitle: "Mixed Vegetables, Tofu", price: 9.99 },
    ];
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, selected) => {
        const currentDate = selected || selectedDate;
        setShowDatePicker(false);
        setSelectedDate(currentDate); 
        console.log("date is here================>",currentDate.toLocalString())
    };
    const handleTimeChange = (event, selected) => {
        const currentTime = selected || selectedTime;
        setShowTimePicker(false);
        setSelectedTime(currentTime)     
        console.log("selected time is----------------->",currentTime)
    };

    const handleItemPress = (item) => {
        setSelectedItem(item.id === selectedItem ? null : item.id); // Toggle selected item
    };

    console.log("caterer data from state", subCategoryData)
    const handleFinalOrder = () => {
        const finalOrderData = {

            "catererId": subCategoryData?.data?.id,
            "couponId": 1,
            "addressId": 14,
            "status": "PENDING",
            "order_type": "DELIVERY",
            "payment_method": "COD",
            "service_charge": 1.00,
            "delivery_fee": 2.00,
            "promo_discount": 2.50,
            "subtotal": +(totalPrice+3-2.50).toFixed(2),
            "tax_charge": 5.10,
            "total_amount":+(totalPrice+5.10+3-2.50).toFixed(2),
            "delivery_datetime": "2024-05-15 05:30:00",
            "order_items": orderItem
        }
    
        navigation.navigate('orderreceipt',{
            params:{
                finalOrderData:finalOrderData
            }
        }

        )

    }

    if (isRefreshing) {
        return (<View style={styles.indicator}>
            <ActivityIndicator size="large" color='black' />
        </View>)
    }

    return (
        <View style={{ flex: 1 }}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={styles.mainScreen}>
                <View style={styles.catererCardContiner}>
                    <CatererCard
                        imageUri={subCategoryData?.data?.image}
                        title={subCategoryData?.data?.name}
                        address={subCategoryData?.data?.address}
                        RatingValue={subCategoryData?.data?.rating}
                        enableRating={true}
                        isCurved={false}
                    />
                </View>
                <View>
                    <Text style={styles.commonTextStyle}>Date and Time</Text>
                    {/* <Button title="Select Time" onPress={() => setShowTimePicker(true)} /> */}
                    <View style={styles.datetimeContainer}>
                        <TouchableOpacity style={styles.calanderContaiener} onPress={() => setShowDatePicker(true)}>
                            <Text style={styles.dateTextStyle}>{`${day}/${month}/${year}`}</Text>
                            <Fontisto name='date' size={20} color={colors.CERVmaincolor} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.calanderContaiener} onPress={() => setShowTimePicker(true)}>
                            <Text style={styles.dateTextStyle}>{`${hour}:${minute} ${hour < 12 ? 'AM' : 'PM'}`}</Text>
                            <MaterialCommunityIcons name='clock-time-five-outline' size={22} color={colors.CERVmaincolor} />
                        </TouchableOpacity>
                    </View>
                    {showTimePicker && (
                        <DateTimePicker
                            value={selectedTime}
                            mode="time"
                            is24Hour={true}
                            display='clock'
                            onChange={handleTimeChange}
                        />
                    )}
                    {showDatePicker && (
                        <DateTimePicker
                            value={selectedDate}
                            mode="date"
                            is24Hour={true}
                            display='calendar'
                            onChange={handleDateChange}
                        />
                    )}
                </View>
                <View style={styles.foodDetails}>
                    <FormInput
                        headingname={'Food Category'}
                        placeholder={'Category'}
                        values={subCategoryData?.data?.food_category}
                    />
                    <FormInput
                        headingname={'Bio'}
                        placeholder={'Bio'}
                        values={subCategoryData?.data?.bio}
                    />
                </View>

                <View style={styles.orederType}>
                    <Text style={styles.orderTypeText}>Order Type</Text>
                    <RadioButton.Group onValueChange={handleRadioButtonChange} value={isChecked}>
                        <View style={styles.orderRadioContainer}>
                            <View style={styles.orderRadioButton}>
                                <View style={styles.radioButton}>
                                    <RadioButton value="delivery" color={colors.CERVmaincolor} />
                                </View>
                                <View style={styles.text}>
                                    <Text style={styles.mainText}>Delivery</Text>
                                </View>
                            </View>
                            <View style={styles.orderRadioButton}>
                                <View style={styles.radioButton}>
                                    <RadioButton value="pickup" color={colors.CERVmaincolor} />
                                </View>
                                <View style={styles.text}>
                                    <Text style={styles.mainText}>Pickup</Text>
                                </View>
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>
                <View style={styles.menuContainer}>
                    <Text>Menu</Text>
                    <View>
                        <FlatList
                            data={subCategoryData?.data?.food_types}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {
                                    handleSubcategoryData(item.id)
                                    handleItemPress(item)
                                }}>
                                    <View style={[styles.subcategoryContainer, { backgroundColor: item.id === selectedItem ? colors.CERVmaincolor : 'transparent' }]}>
                                        <Text style={{ color: item.id === selectedItem ? 'white' : 'black' }}>{item.name}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            showsHorizontalScrollIndicator={false}
                            nestedScrollEnabled
                            horizontal
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={catererSubData?.data}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <View style={styles.horizontalSeperator} />
                                    <TouchableOpacity style={styles.boxView} onPress={() => setShowData(!showData)}>
                                        <Text style={styles.subTitleText}>{item?.name}</Text>
                                        <Text style={styles.subTitleTotalText}>{item?.product_count} items</Text>
                                    </TouchableOpacity>
                                    {showData && item.product_count > 0 && (
                                        <FlatList
                                            data={item?.products}
                                            keyExtractor={(item) => item?.id}
                                            renderItem={({ item }) => {
                                                return (
                                                    <View style={styles.foodCardContainer}>
                                                        <CatererSubCategoryCard
                                                            title={item?.food_name}
                                                            subTitle={item?.subtitle}
                                                            price={item.prices.slice(0, 1).map((item) => {
                                                                return (
                                                                    `$${item.price}`
                                                                )
                                                            })}
                                                            handleCounterPress={() => handleAddButton(item?.id)}
                                                            enableCounter={showCounter}
                                                            index={item?.id}
                                                            quantity={getProductQuantity(item?.id)}
                                                            handleDecrement={() => handleDecrementProduct(item?.id, item.prices[0].price)}
                                                            handleIncrement={() => handleIncrementProduct(item?.id, item.prices[0].price)}
                                                        />
                                                    </View>)

                                            }}
                                        />)}
                                    <View style={styles.horizontalSeperator} />
                                </View>
                            )
                        }}
                    />
                </View>
                {/* <View style={styles.foodCardContainer}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={foodData}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.foodCardContainer}>
                                    <CatererSubCategoryCard
                                        title={item.title}
                                        subTitle={item.subtitle}
                                        price={`$${item.price}`}
                                        handleCounterPress={() => handleAddButton(item.id)}
                                        enableCounter={showCounter}
                                        index={item.id}
                                        handleDecrement={() => handleDecrementProduct()}
                                        handleIncrement={() => handleIncrementProduct()}
                                    />
                                </View>
                            )
                        }}
                    />
                </View> */}
            </KeyboardAwareScrollView>
            <View style={styles.totalContainer}>
                <Text style={styles.totalTextColor}>Item Total ${totalPrice.toFixed(2)}</Text>
                <View style={styles.seperator} />
                <TouchableOpacity onPress={() => handleFinalOrder()}>
                    <Text style={styles.totalTextColor}>MAKE PAYMENT</Text></TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainScreen: {
        flex: 1,
        backgroundColor: colors.White,
        paddingHorizontal: Metrics.CountScale(10)
    },
    orderRadioContainer: {
        flexDirection: 'row',
    },
    orderRadioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: Metrics.CountScale(50)
    },
    seperator: {

        height: Metrics.CountScale(50),
        borderRightWidth: Metrics.CountScale(1.5),
        borderRightColor: colors.White,
        // marginHorizontal:30
    },
    orederType: {
        justifyContent: 'space-around'
    },
    orderTypeText: {
        color: colors.lighttextcolor
    },
    subcategoryContainer: {
        borderRadius: Metrics.CountScale(15),
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.lighttextcolor,
        backgroundColor: colors.White,
        width: Metrics.CountScale(90),
        height: Metrics.CountScale(30),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: Metrics.CountScale(5)
    },
    foodCardContainer: {
        marginVertical: Metrics.CountScale(5)
    },
    dateTextStyle: {
        color: colors.GreyColor
    },
    calanderContaiener: {
        flexDirection: 'row',
        backgroundColor: colors.White,
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.CountScale(20),
        paddingVertical: Metrics.CountScale(10),
        width: Metrics.CountScale(150),
        borderWidth: Metrics.CountScale(1.5),
        borderColor: colors.GreyColor
    },
    datetimeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.CERVmaincolor
    },
    totalTextColor: {
        color: colors.White
    },

    boxView: {
        paddingVertical: Metrics.CountScale(5),
        paddingHorizontal: Metrics.CountScale(10),
    },
    subTitleText: {
        fontSize: Metrics.CountScale(20),
        fontWeight: 'bold'
    },
    subTitleTotalText: {
        color: colors.GreyColor,
    },
    horizontalSeperator: {
        borderTopColor: colors.stronglighttext,
        borderTopWidth: Metrics.CountScale(1.5),
        marginVertical: Metrics.CountScale(10)
    }


}
)


export default CatererRecipeDetails
