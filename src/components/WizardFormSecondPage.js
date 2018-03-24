import React from 'react';
import { Text, ScrollView, View, Button,TouchableOpacity } from 'react-native';
import { Field, reduxForm, FieldArray } from 'redux-form';
import validate from '../util/validate';
import RenderCards from './RenderCards';


const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props;
    return (
        <ScrollView>
            <Text>This is second Page</Text>

            <FieldArray name="cards" component={RenderCards} />

            <View style={{ flexDirection: 'row' }}>
                <Button onPress={previousPage} title='Back page'/>
                <Button onPress={handleSubmit} title='Next page'/>
            </View>

        </ScrollView>
    );
};

export default reduxForm({
    form: 'deckForm', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormSecondPage);
