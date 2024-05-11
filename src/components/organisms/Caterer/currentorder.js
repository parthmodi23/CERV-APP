import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import Metrics from '../../../assests/Metrics'
import { MaterialBottomTabView } from '@react-navigation/material-bottom-tabs'
import colors from '../../../constants/colors'
const CatererCurrentOrder = () => {
  return (
    <View style={styles.mainScreen}>
      <View style={styles.imageTextContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../../assests/images/customer.jpg')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>St John & St Thomas Catering</Text>
          <Text style={styles.addressText}>2333 williom Street,Ma park</Text>
          <Text style={styles.addressText}>22/01/24</Text>
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
      <TouchableOpacity style={[styles.cancelButtonContainer,styles.acceptButton]}>
            <Text style={styles.cancelText}>Accept Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.cancelButtonContainer,styles.rejectButton]}>
            <Text style={styles.cancelText}>Reject Order</Text>
          </TouchableOpacity>
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
  rejectButton:{
    backgroundColor:colors.reject
  },
  acceptButton:{
    backgroundColor:colors.accept
  },
  recepiText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:Metrics.CountScale(7)
  },
  cancelText:{
color:colors.white
  },
  foodListContainer:{
    marginVertical:Metrics.CountScale(10)
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
    borderTopColor:colors.stronglighttext,
    marginVertical:Metrics.CountScale(5)
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderDetailsText: {
    marginVertical: Metrics.CountScale(20),
    flexDirection:'row',
    justifyContent:'center'
  },
  text:{
    fontWeight:'bold',
    fontSize:Metrics.CountScale(15)
  },
  price:{
    color:colors.lighttextcolor
  },
  orderTypeText:{
    color:colors.lighttextcolor,
    marginTop:Metrics.CountScale(10)
  },
  cancelButtonContainer:{
    marginHorizontal:Metrics.CountScale(20),
    // marginTop:Metrics.CountScale(5),
    paddingHorizontal:Metrics.CountScale(35),
    paddingVertical:Metrics.CountScale(10)

  }

})
export default CatererCurrentOrder
