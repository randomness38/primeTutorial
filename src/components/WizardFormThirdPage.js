import React from 'react';
import { Text, ScrollView,View, Button } from 'react-native';
import {  FieldArray, reduxForm } from 'redux-form';
import validate from '../util/validate';
import RenderOpts from './RenderOpts'
const submit = values => {
    alert(`Validation success. Values = ${JSON.stringify(values)}`);
}

const WizardFormThirdPage = props => {
    const { handleSubmit, pristine, previousPage, submitting, reset } = props;
    return (
        <ScrollView>
            <Text>This is first Page</Text>
            <FieldArray name="opts" component={RenderOpts} />
            <View style={{ flexDirection: 'row' }}>
                    <Button onPress={previousPage} title='Back'/>
                    <Button onPress={handleSubmit(submit)} title='Submit'/>
                    <Button disabled={pristine || submitting} onPress={reset} title='Clear'/>
            </View>
        </ScrollView>
    );
};
export default reduxForm({
    form: 'deckForm', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormThirdPage);
