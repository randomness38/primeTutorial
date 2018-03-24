import React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import validate from '../util/validate';
import renderField from './renderField';


const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>This is second Page</Text>
            <Field name="email" keyboardType="email-address" label="Email: " placeholder="Enter email" component={renderField}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={previousPage} style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Back page -></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit} style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Next page -></Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormSecondPage);
