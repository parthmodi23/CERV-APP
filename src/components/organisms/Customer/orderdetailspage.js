import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import colors from '../../../constants/colors';

const OrderDetailsPage = () => {
    const data = [
        { time: '09:00', title: 'Event 1' },
        { time: '10:00', title: 'Event 2' },
        { time: '11:00', title: 'Event 3' },
        { time: '12:00', title: 'Event 4' },
        { time: '13:00', title: 'Event 5' }
    ];

    return (
        <View style={styles.container}>
            <Timeline
                data={data}
                circleSize={20}
                circleColor={colors.CERVmaincolor}
                lineColor={colors.CERVmaincolor}
                timeContainerStyle={{ minWidth: 72, marginTop: -5 }}
                listViewStyle={styles.listView}
                renderDetail={(rowData, sectionID, rowID) => (
                    <View style={styles.detailContainer}>
                        <Text style={styles.detailText}>{rowData.title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    listView: {
        flexDirection: 'row',
    },
    detailContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: colors.CERVmaincolor,
        borderRadius: 5,
    },
    detailText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default OrderDetailsPage;
