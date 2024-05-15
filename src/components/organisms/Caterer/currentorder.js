import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, FlatList, Alert, Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
import { useDispatch, useSelector } from 'react-redux'
import * as menuAction from '../../../redux/actions/caterer/menu'
import { useNavigation } from '@react-navigation/native'
import * as orderAction from '../../../redux/actions/order'
const CatererCurrentOrder = () => {

  const navigation = useNavigation()
  const [isRefreshing, setIsRefresing] = useState(true)
  const [error, setError] = useState(false)
  const dispatch = useDispatch()

  const currentOrderData = useSelector(state => state.order?.currentOrderData)
  console.log("my from screen data", currentOrderData)

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

  const handleAcceptOrder = (orderId) => {
    const id = {
      orderId: orderId
    }
    console.log("log reject id", id)
    dispatch(menuAction.acceptOrder(id)).then((data) => {
      if (data.success) {
        Alert.alert('Order Acceepted')
      } else {
        Alert.alert('Something went wrong!', data.message)
      }
    })
      .catch((error) => {
        console.log("accept order error", error)
      })
  }

  const handleRejectOrder = (orderId) => {
    const id = {
      orderId: orderId
    };

    // Display an alert with options for the user
    Alert.alert(
      'Confirm Rejection',
      'Are you sure you want to reject the order?',
      [
        {
          text: 'No', // Button for "No"
          onPress: () => console.log('Cancel Pressed'), // Do nothing if "No" is pressed
          style: 'cancel',
        },
        {
          text: 'Yes', // Button for "Yes"
          onPress: () => {
            // Dispatch the action to reject the order
            dispatch(menuAction.rejectOrder(id))
              .then((data) => {
                if (data.success) {
                  Alert.alert('Order Rejected');
                }
              })
              .catch((error) => {
                console.error('Error rejecting order:', error);
              });
          },
        },
      ],
      { cancelable: false } // Ensure that the user cannot dismiss the alert by tapping outside of it
    );
  };
  // const handleCardPress=(item)=>{
  //   navigation.navigate('currentorderdetails',{
  //     item:item
  //   })
  // }

  if (isRefreshing) {
    return (<View style={styles.screen}>
      <ActivityIndicator size="large" color='black' />
    </View>)
  }
  if (currentOrderData.length === 0 || null) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>Therer is no orders for today!</Text>
      </View>)
  }
  console.log("cuerrent order data", currentOrderData)

  return (
    <View style={styles.mainScreen}>
      <FlatList
        data={currentOrderData}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Pressable style={styles.screenView}>
              {item.userInfo.map((items, index) => (
                <View style={styles.imageTextContainer}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: items.image }} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{items.name}</Text>
                    <Text style={styles.addressText}>{items.address}</Text>
                    <Text style={styles.addressText}>{item.delivery_datetime.slice(0, 10)}</Text>
                  </View>
                </View>
              ))}
              <View style={styles.line} />

              {item.order_items.map((item, index) => (<View style={styles.foodListContainer}>
                <Text style={styles.text}>{item.food_name}</Text>
                <Text style={styles.price}>{`$${(item.price * item.quantity).toFixed(2)}`}</Text>
              </View>))}
              <View style={styles.line} />
              <Text style={styles.statusText} >Order Status: <Text style={{ color: item.status === 'ACCEPTED' ? colors.success : colors.reject }}>{item.status}</Text></Text>
              <View style={styles.line} />
              <View style={styles.orderDetailsText}>
                <TouchableOpacity style={[styles.cancelButtonContainer, styles.acceptButton]} onPress={() => handleAcceptOrder(item.id)}>
                  <Text style={styles.cancelText}>Accept Order</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.cancelButtonContainer, styles.rejectButton]} onPress={() => handleRejectOrder(item.id)}>
                  <Text style={styles.cancelText}>Reject Order</Text>
                </TouchableOpacity>
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainScreen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  rejectButton: {
    backgroundColor: colors.reject
  },
  acceptButton: {
    backgroundColor: colors.accept
  },
  recepiText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Metrics.CountScale(7)
  },
  cancelText: {
    color: colors.white
  },
  foodListContainer: {
    marginVertical: Metrics.CountScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    marginVertical: Metrics.CountScale(5),
    borderTopColor: colors.stronglighttext,
    borderTopWidth:Metrics.CountScale(1.1)
    // marginVertical: Metrics.CountScale(5)
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDetailsText: {
    marginVertical: Metrics.CountScale(20),
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
    marginTop: Metrics.CountScale(10)
  },
  cancelButtonContainer: {
    marginHorizontal: Metrics.CountScale(20),
    // marginTop:Metrics.CountScale(5),
    paddingHorizontal: Metrics.CountScale(20),
    paddingVertical: Metrics.CountScale(10)
  },
  statusText: {
    fontWeight: 'bold',
    marginVertical:Metrics.CountScale(5)
  },
  container: {
    flex: 1,
    marginHorizontal: Metrics.CountScale(15),
    // justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: Metrics.CountScale(10),
    borderColor: colors.black,
    elevation: 5,
    backgroundColor: colors.White,
    borderWidth: Metrics.CountScale(1.5)
  },
  screenView:{
    paddingHorizontal:Metrics.CountScale(10)
  }

})
export default CatererCurrentOrder
