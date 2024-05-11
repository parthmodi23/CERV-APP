import React from 'react'
import SavedCard from '../../../components/organisms/Customer/savedcard'
import { Text, View,StyleSheet } from 'react-native'
import colors from '../../../constants/colors'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
const PaymentMethod = () => {
  return (
    <View style={{flex:1}}>
        {/* <View style={styles.heading}>
    <Text style={styles.cardText}>Saved Cards</Text>
    <Text>ADD CARD</Text>
        </View> */}
        <SavedCard/>
        
    </View>
  )
}

const styles= StyleSheet.create({
    heading:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:hp(1),
        marginHorizontal:wp(5),
    },
    cardText:{
        color:colors.lighttextcolor
    }
})

export default PaymentMethod
