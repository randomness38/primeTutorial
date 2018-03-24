import React from 'react';
import { Text, View,TextInput } from 'react-native';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <View>
        <Text>{label}</Text>
        <View>
            <TextInput {...input} placeholder={label} type={type} />
            {touched && error && <Text>{error}</Text>}
        </View>
    </View>
);

export default renderField;
