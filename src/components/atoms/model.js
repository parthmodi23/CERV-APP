import React from 'react';
import { Modal, Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import colors from '../../constants/colors';
import Metrics from '../../assests/Metrics';

const AppModel = ({ visible, onClose, message, buttonText1, onPress1, buttonText2, onPress2 }) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            supportedOrientations={['portrait']}
            onRequestClose={onClose}>
            <View style={[styles.centeredView, { backgroundColor: isDarkMode ? 'black' : 'rgba(0,0,0,0.6)' }]}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>{message}</Text>
                    <View style={styles.line} />
                    <View style={styles.buttonContainer}>
                        {buttonText1 && (
                            <Pressable
                                style={[styles.button, styles.buttonCancel]}
                                onPress={onPress1}>
                                <Text style={styles.textStyle}>{buttonText1}</Text>
                            </Pressable>
                        )}
                        {buttonText2 && (
                            <Pressable
                                style={[styles.button, styles.buttonAccept]}
                                onPress={onPress2}>
                                <Text style={styles.textStyle}>{buttonText2}</Text>
                            </Pressable>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: colors.White,
        borderRadius: Metrics.CountScale(20),
        paddingHorizontal: Metrics.CountScale(25),
        paddingVertical: Metrics.CountScale(25),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: Metrics.CountScale(0),
            height: Metrics.CountScale(2),
        },
        shadowOpacity: Metrics.CountScale(0.25),
        shadowRadius: Metrics.CountScale(4),
        elevation: Metrics.CountScale(5),
    },
    button: { 
        paddingHorizontal:Metrics.CountScale(40),
    },
    textStyle: {
        color: colors.AppColor,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: Metrics.CountScale(10),
        fontSize: Metrics.CountScale(18),
    },
    modalText: {
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(18),
        textAlign: 'center',
        lineHeight: Metrics.CountScale(30)
    },
    line: {
        marginTop: Metrics.CountScale(25),
        width: Metrics.CountScale(300),
        borderTopWidth: Metrics.CountScale(1.1),
        borderColor: colors.TabBg
    },
    buttonContainer: {
        flexDirection: 'row',
        paddingTop:Metrics.CountScale(10)
    },
    buttonAccept:{
        paddingHorizontal:Metrics.CountScale(50),
        borderLeftColor:colors.AppColor, 
        borderLeftWidth:Metrics.CountScale(1.5),
    },
   
});

export default AppModel;
