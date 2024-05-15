import React, { useState, useRef, useEffect } from 'react';
import { Dimensions, Text, View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Metrics from '../../../assests/Metrics';

const CarouselView = () => {
    const width = Dimensions.get('window').width;


    const pics=[
            img1=require('../../../assests/images/2.png'),
            img3=require('../../../assests/images/3.png'),
            img4=require('../../../assests/images/4.png')
    ]
    // const img1 = 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600';
    // const img2 = 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600';
    // const img3 = 'https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600';
    // const img4 = 'https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=600';

    const [data, setData] = useState(pics);
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % data.length;
            flatListRef.current.scrollToIndex({
                animated: true,
                index: nextIndex,
                viewPosition: 0.5, // Center the item in the view
                duration: 500, // Duration of scroll animation in milliseconds
            });
            setCurrentIndex(nextIndex);
        }, 2000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleDotPress = (index) => {
        flatListRef.current.scrollToIndex({
            animated: true,
            index: index,
            viewPosition: 0.5,
            duration: 700,
        });
        setCurrentIndex(index);
    };

    return (
        <View style={styles.mainScreen}>
            <View style={styles.carouselContainer}>
                <FlatList
                    ref={flatListRef}
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => ( 
                        <View style={styles.cardView}>
                            <TouchableOpacity disabled={true}>
                                <Image style={styles.image} source={item} />
                            </TouchableOpacity>
                        </View>
                    )}
                    onScroll={(e) => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex(Math.round(x / width));
                    }}
                    pagingEnabled
                    horizontal
                />
            </View>
            <View style={styles.index}>
                {data.map((item, index) => (
                    <TouchableOpacity key={index}
                     onPress={() => handleDotPress(index)
                     }>
                        <View
                            style={{
                                width: currentIndex === index ? 20 : 8,
                                backgroundColor: currentIndex === index ? 'green' : 'red',
                                height: currentIndex === index ? 10 : 8,
                                marginHorizontal: 5,
                                borderRadius: 10,
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainScreen: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    carouselContainer: {
        marginHorizontal: wp(5),
        width: wp(91),
        overflow: 'hidden',
    },
    cardView: {
        width: wp(91),
        justifyContent: 'center',
        overflow:'hidden',
        // borderRadius:Metrics.CountScale(20),

    },
    image: {
        width: '100%',
        height: hp(23),
        // borderRadius:Metrics.CountScale(20),
        overflow:'hidden'
    },
    index: {
        marginVertical: hp(1),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CarouselView;
