import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';


export const ContactInput = ({
    // Dumb Input Component 는 label, keyboardType, mata, input 을 다운도킹 받는 Stateless Component
    // <TextInput> 은 mata (: 인풋 상태), input(: 인풋 데이터) data 를 업도킹
                                label,
                                keyboardType,
                                meta: { touched, error, warning, asyncValidating },
                                input: { onChange, ...restInput },
                                 placeholder,}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                onChangeText={onChange}
                {...restInput}
            >
            </TextInput>

            {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>) ||
                (warning && <Text style={{ color: 'orange' }}>{warning}</Text>) ||
                (asyncValidating && <Text style={{ color: 'orange' }}>Validating...</Text>))}

        </View>
    )
}
