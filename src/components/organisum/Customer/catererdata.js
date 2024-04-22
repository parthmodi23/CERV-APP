import React from 'react'
import { View ,Text,StyleSheet, FlatList} from 'react-native'
import CatererCard from '../../molecules/customer/caterercard'
import { useSelector } from 'react-redux'
import colors from '../../../constants/colors'
import { heightPercentageToDP as hp,widthPercentageToDP as wp } from 'react-native-responsive-screen'
const CatererData = () => {

    const catererData=useSelector((state)=>state.home.catererData)
    console.log(catererData)
  return (
    <View style={{flex:1}}>
         <View style={styles.heading}>
    <Text style={styles.cardText}>Saved Cards</Text>
    <Text>ADD CARD</Text></View>
        <FlatList
        data={catererData}
        renderItem={(item)=>{
        return <View style={styles.cardview} key={item.item.id}>
                 <CatererCard 
                    imageUri={item.item.image}
                    title={item.item.name}
                    address={item.item.address}
                    price={`${item.item.cost_per_plat}/Per Dish`}
                    RatingValue={item.item.rating}
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
export default CatererData
