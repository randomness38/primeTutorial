import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';


export const ContactForm = ({
    // Dumb Input Component 는 label, keyboardType, mata, input 을 다운도킹 받는 Stateless Component
    // <TextInput> 은 mata (: 인풋 상태), input(: 인풋 데이터) data 를 업도킹
                                label,
                                keyboardType,
                                meta: { touched, error, warning },
                                input: { onChange, ...restInput }}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                keyboardType={keyboardType}
                onChangeText={onChange}
                {...restInput}
            >
            </TextInput>

            {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
                (warning && <Text style={{ color: 'orange' }}>{warning}</Text>))}
        </View>
    )
}
