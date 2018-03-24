import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
// import ReduxContactForm from "./src/components/ReduxContactForm";
import store from "./src/store";
// import ContactForm from "./src/components/ContactForm";
import WizardForm from "./src/components/WizardForm";

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <WizardForm style={styles.container}/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
