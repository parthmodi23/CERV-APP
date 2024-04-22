import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Card from '../../../data/carddummydata'
import PaymentCard from '../../molecules/customer/paymentcard'
import { heightPercentageToDP as hp,widthPercentageToDP as wp} from 'react-native-responsive-screen'
import colors from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
const SavedCard = () => {

    const navigation=useNavigation()
    useEffect(() => {
        navigation.setOptions({
            title:'Payment Method',
            headerTitleAlign: "center",
        })
    }, [])
  return (
    <View style={{flex:1}}>
         <View style={styles.heading}>
    <Text style={styles.cardText}>Saved Cards</Text>
    <Text>ADD CARD</Text></View>
        <FlatList
        data={Card}
        renderItem={(item)=>{
        return <View style={styles.cardview} key={item.item.id}>
                 <PaymentCard 
                imageUri={item.item.cardImage}
                cardNumber={`**** **** **** ${item.item.cardNumber.slice(-4)}`}
                expireDate={item.item.expireDate}
                />
            </View>
        }}
        />
    </View>
  )
}
const styles=StyleSheet.create({
    cardview:{
        margin:hp(1)
    },
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

export default SavedCard
