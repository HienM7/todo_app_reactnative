import React from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { moderateScale, verticalScale } from './dimensions';

export interface Props {
    label?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    onChangeText?: (text: string) => void;
    value?: string;
}

export const CustomInput = ({ label, placeholder, secureTextEntry, onChangeText, value }: Props) => {
    return (
        <View>
            <Text style={styles.userText}>{label}</Text>
            <TextInput
                style={styles.userInput}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    userInput: {
        color: '#313131',
        width: '100%',
        fontSize: verticalScale(16),
        borderBottomColor: '#707070',
        borderBottomWidth: moderateScale(1),
    },
    userText: {
        width: '100%',
        fontSize: verticalScale(20),
        color: '#313131',
        marginTop: verticalScale(40),
    }
});
