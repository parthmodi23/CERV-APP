import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, Pressable, Alert, FlatList, TouchableOpacity } from 'react-native'
import Metrics from '../../../assests/Metrics'
import colors from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'
import * as orderAction from '../../../redux/actions/order'
import * as homeAction from '../../../redux/actions/homeaction'
import DoctorHomeCard from '../../../screens/patient/Home/DoctorHomeCard'
const CurrentOrder = () => {

  const navigation = useNavigation()
  const [isRefreshing, setIsRefresing] = useState(true)
  const [error, setError] = useState(false)
  const currentOrderData = useSelector(state => state.order?.currentOrderData)
  console.log("my from screen data", currentOrderData)
  const dispatch = useDispatch()

  useEffect(() => {
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
        setIsRefresing(false);
      });
  }, []);

  console.log(error)

  const handleCancelButton = (id) => {
    console.log(id)
    const orderId = {
      orderId: id
    }
    dispatch(homeAction.cancelCustomerOrder(orderId)).then((data) => {
      if (data.success) {
        Alert.alert('Order Cancelled Successfully!')
      } else {
        Alert.alert('Something went wrong!', data.message)
      }
    })
      .catch((data) => {
        Alert.alert("error while cancelling the order", data.message)
      })
  }
  const handleCardPress = (item) => {
    navigation.navigate('currentorderdetails', {
      item: item
    })
  }

  if (isRefreshing) {
    return (<View style={styles.indicator}>
      <ActivityIndicator size="large" color='black' />
    </View>)
  }
  if (currentOrderData.length === 0 || null) {
    return (
      <View style={styles.emptyScreenText}>
        <Text style={styles.text}>Please add Some Order!</Text>
      </View>)
  }
  console.log(currentOrderData)
  return (
    <View style={styles.mainScreen}>

      <FlatList
        data={currentOrderData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <View style={styles.cardContainer}>
              <Pressable style={styles.cardInnerStyle} onPress={() => { handleCardPress(item) }}>
                {item.catererInfo.map((item, index) => (
                  <View style={styles.imageTextContainer}>
                    <View style={styles.imageContainer}>
                      <Image style={styles.image} source={{ uri: item?.image }} />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.titleText}>{item?.name}</Text>
                      <Text style={styles.addressText}>{item?.address}</Text>
                    </View>
                  </View>
                ))}
                <View style={styles.line} />
                <FlatList
                  data={item?.order_items.slice(0, 3)}
                  keyExtractor={(item) => item?.id}
                  renderItem={({ item }) => {
                    return (
                      <View style={styles.foodListContainer}>
                        <View style={styles.recepiText}>
                          <Text style={styles.text}>{item?.food_name}</Text>
                          <Text style={styles.price}>{`$${(item?.quantity * item?.price).toFixed(2)}`}</Text>
                        </View>
                      </View>
                    )
                  }}
                />
                <View style={styles.line} />
                <View style={styles.orderDetailsText}>
                  <Text style={styles.orderTypeText}>ORDER STATUS</Text>
                  <Text style={{ color: item?.status === 'ACCEPTED' ? colors.success : colors.reject }}>{item?.status}</Text>

                  <Text style={styles.orderTypeText}>ORDER TYPE</Text>
                  <Text>{item?.order_type}</Text>
                  <Text style={styles.orderTypeText}>ORDER ON</Text>
                  <Text>{item?.created_at.substring(0, 10)}</Text>
                  <View style={styles.priceContainer}>
                    <View>
                      <Text style={styles.orderTypeText}>Amount</Text>
                      <Text style={styles.typeSubText}>${item?.total_amount.toFixed(2)}</Text>
                    </View>
                    <TouchableOpacity style={styles.cancelButtonContainer} onPress={() => handleCancelButton(item?.id)}>
                      <Text style={styles.cancelText}>Cancel Order</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Pressable>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: Metrics.CountScale(20),
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical:Metrics.CountScale(10),
    borderColor: colors.black,
    elevation:5,
    backgroundColor:colors.White,
    borderWidth:Metrics.CountScale(1.5)
  },
  recepiText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.CountScale(5)
  },
  foodListContainer: {
    marginVertical: Metrics.CountScale(5)
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
    marginTop: Metrics.CountScale(6)
  },
  cancelButtonContainer: {
    marginHorizontal: Metrics.CountScale(20),
    marginTop: Metrics.CountScale(10),
    backgroundColor: colors.CERVmaincolor,
    padding: Metrics.CountScale(10),
  },
  emptyScreenText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  line: {
    borderTopWidth: Metrics.CountScale(1.5),
    borderTopColor: colors.stronglighttext,
    // marginVertical: Metrics.CountScale(5)
  },
  newSeperator: {
    borderTopWidth: Metrics.CountScale(1.5),
    borderTopColor: colors.success,
    borderTopColor: colors.stronglighttext,
    marginVertical: Metrics.CountScale(5)
  },
  cardInnerStyle:{
    paddingHorizontal:Metrics.CountScale(10)
  }

})
export default CurrentOrder
