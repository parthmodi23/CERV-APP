import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, ActivityIndicator, FlatList } from 'react-native'
import Metrics from '../../../assests/Metrics'
import colors from '../../../constants/colors'
import { Rating } from 'react-native-ratings'
import { Entypo } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import * as orderAction from '../../../redux/actions/order'

const PastOrder = () => {

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
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              {item.catererInfo.map((item, index) => (
                <View style={styles.imageTextContainer} key={item.id}>
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: item?.image }} />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{item?.name}</Text>
                    <Text style={styles.addressText}>{item?.address}</Text>
                  </View>
                </View>
              ))
              }
              <View style={styles.line} />
              <FlatList
                data={item.order_items.slice(0, 3)}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.foodListContainer}>
                      <View style={styles.recepiText}>
                        <Text style={styles.text}>{item.food_name}</Text>
                        <Text style={styles.price}>{`$${(item.quantity * item.price).toFixed(2)}`}</Text>
                      </View>
                    </View>
                  )
                }}
              />
              <View style={styles.line} />
              <View style={styles.orderDetailsText}>
                <Text style={styles.orderTypeText}>ORDER ON</Text>
                <Text>{item.created_at.substring(0, 10)}</Text>
                <Text style={styles.orderTypeText}>Amount</Text>
                <Text style={styles.typeSubText}>${item.subtotal.toFixed(2)}</Text>
                <View style={styles.completedText}>
                  <Entypo name='dot-single' size={30} color={item?.status === 'CANCELLED' ? 'red' : 'green'} />
                  <Text style={[styles.orderCompleteText, { color: item?.status === 'CANCELLED' ? 'red' : 'green' }]}>{item?.status}</Text>
                </View>
              </View>
              <View style={styles.line} />
              <View style={styles.customerReviewContainer}>
                <Rating
                  type='star'
                  ratingCount={5}
                  imageSize={20}
                  style={styles.rating}
                  readonly={true}
                  // fractions={1}
                  minValue={0}
                  startingValue={item.rate}
                  onFinishRating={(rating) => ratingCompleted(rating)}
                />
                <Text style={styles.reviewText}>Write a Review</Text>
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
    marginTop: Metrics.CountScale(10)
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
  emptyScreenText: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }

})
export default PastOrder
