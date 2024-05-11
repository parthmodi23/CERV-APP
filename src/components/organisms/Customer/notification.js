import React, { useEffect } from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import NotificationCard from '../../molecules/customer/notificationcard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import NotificationData from '../../atoms/data/notificationdata'
import { useNavigation } from '@react-navigation/native'
const NotificationPage = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Notification',
            headerTitleAlign: 'center'
        })
    })
    return (
        <View style={styles.mainScreen}>
            <FlatList
                data={NotificationData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={styles.cardContainer} onPress={() => alert('You tapped me!')}>
                        <NotificationCard
                            iconname={item.iconname}
                            text={item.title}
                            iconBgColor={item.iconbgColor}
                            time={item.time}
                        />
                    </TouchableOpacity>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        marginHorizontal: hp(1)
    },
    cardContainer: {
        padding: hp(1)
    }
})

export default NotificationPage
