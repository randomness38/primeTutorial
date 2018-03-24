import React from 'react';
import {View, Text, Button } from 'react-native'
import { Field, FieldArray } from 'redux-form';

import renderField from './renderField'

export default RenderCard = ({ fields, meta: { touched, error, submitFailed } }) => {
    return (
        <View>
            <View>
                <Button onPress={() => fields.push({})} title='Add Card'/>
                {(touched || submitFailed) && error && <Text  style={{ color: 'red' }}>{error}</Text>}
            </View>
            {fields.map((card, index) => (
                <View key={index}>
                    <Button
                        type="button"
                        title="Remove Card"
                        onPress={() => fields.remove(index)}
                    />
                    <Text>Card #{index + 1}</Text>
                    <Field
                        name={`${card}.question`}
                        type="text"
                        component={renderField}
                        label="Question"
                    />
                    <Field
                        name={`${card}.answer`}
                        type="text"
                        component={renderField}
                        label="Answer"
                    />
                </View>
            ))}
        </View>
    )
}
