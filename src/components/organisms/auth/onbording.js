import { Button, Dimensions, FlatList, Image, StatusBar, StyleSheet, LogBox, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
// import { SLIDES } from './data/dummydata'
import { SafeAreaView } from 'react-native-safe-area-context'

// import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
const { width, height } = Dimensions.get('window')
export const COLORS = { primary: '#282534', white: 'fff' }
import { SLIDES } from '../../atoms/data/slides.js'
import CustomButton from '../../atoms/buttoncomponent/button.js'
import colors from '../../../constants/colors.js'
import Metrics from '../../../assests/Metrics.js'
const Slide = ({ item }) => {
    return <View style={{ width, alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
        <Image source={item.images} style={{ height: '75%', width, resizeMode: 'contain' }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
}
const OnboardingScreen = ({ props, navigation }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        LogBox.ignoreAllLogs(); // Ignore all logs
    }, [])
    const ref = useRef(null)
    const Footer = () => {   // indicator
        return <View style={{
            height: height * 0.25,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>
                {SLIDES.map((_, index) => (
                    <View key={index} style={[styles.indicator, currentSlideIndex === index && { backgroundColor: colors.CERVmaincolor }]}>
                    </View>
                ))}
            </View>
            <View style={{ marginBottom: 30, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={styles.buttonContainer} onPress={handleLastButtonClick}><Text style={styles.buttonText}>{currentSlideIndex === SLIDES.length - 1 ? `Let's Go` : 'Next'}</Text></TouchableOpacity>
            </View>
        </View>
    }
    const udatedCurrentSlideIndex = e => {
        const contentoffsetX = e.nativeEvent.contentOffset.x // width off device in
        // console.log(contentoffsetX)
        const currentIndex = Math.round(contentoffsetX / width)
        setCurrentSlideIndex(currentIndex)
        console.log(currentSlideIndex)
    }
    const GotoNextScreen = () => {
        const nextSlideIndex = currentSlideIndex + 1
        if (nextSlideIndex != SLIDES.length) {
            const offSet = nextSlideIndex * width
            ref?.current?.scrollToOffset({ offset: offSet });
            // console.log(nextSlideIndex)
            setCurrentSlideIndex(nextSlideIndex)
        }
    }
    // const skip = () => {
    //     navigation.navigate('Home')
    // }
    const handleLastButtonClick = () => {
        if (currentSlideIndex === SLIDES.length - 1) {
            navigation.navigate('authflow');
        } else {
            GotoNextScreen()
        }
    }
    return (
        <SafeAreaView style={styles.mainScreen}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    {/* <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ flex: 1, marginLeft: 16, lineHeight: 60, }} onPress={() => navigation.goBack()} /> */}
                    <Text style={styles.skipText} onPress={() => navigation.navigate('authflow')}>Skip</Text>
                </View>
                <FlatList
                    ref={ref}
                    onMomentumScrollEnd={udatedCurrentSlideIndex}  // 1 var scroll thase tyre
                    data={SLIDES}
                    pagingEnabled={true}  // full page slide thase
                    contentContainerStyle={{ height: height * 0.75 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <Slide item={item}
                    />} />
                <Footer />
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
    },
    header: {
        // height: 40,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        color: 'black'
    },
    skipText: {
        fontSize: Metrics.CountScale(20),
        paddingHorizontal: Metrics.CountScale(20)

    },
    subtitle: {
        // width:'55%',
        maxWidth: '90%',
        height: 160,
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        overflow: 'hidden',
        marginTop: 16,
        // color: '#E8E8E8'
        color: '#A0A0A0'
    },

    indicator: {
        // height: 2.5,
        // width: 10,
        marginTop: 40,
        backgroundColor: '#E0DEDE',
        marginHorizontal: 3,
        borderRadius: 2,
        width: 20,
        height: 5
    },
    buttonText: {
        color: colors.white,
        fontSize: Metrics.CountScale(20)
    },
    buttonContainer: {
        backgroundColor: colors.CERVmaincolor,
        paddingHorizontal: Metrics.CountScale(100),
        paddingVertical: Metrics.CountScale(10),
        borderRadius: Metrics.CountScale(10)
    }

})
export default OnboardingScreen