import React, {Component} from 'react';
import {Button, ScrollView, Text, TextInput, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Styles from '../styles';

const initialForm = {
    category: null,
    price: null,
};
class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            form: initialForm,
        };
        firestore()
            .collection('Expenses')
            .get()
            .then(querySnapshot => {
                const results = [];
                querySnapshot.forEach(documentSnapshot => {
                    results.push({
                        id: documentSnapshot.id,
                        ...documentSnapshot.data(),
                    });
                });
                this.setState({expenses: results});
            });
    }
    setFormData = (key, value) => {
        this.setState({form: {...this.state.form, [key]: value}});
    };
    onSubmit = () => {
        firestore()
            .collection('Expenses')
            .add({
                ...this.state.form,
                createdAt: firestore.FieldValue.serverTimestamp(),
            })
            .then(documentReference => {
                documentReference.get().then(documentSnapshot => {
                    const expenses = this.state.expenses;
                    expenses.push({
                        id: documentSnapshot.id,
                        ...documentSnapshot.data(),
                    });
                    this.setState({expenses, form: initialForm});
                });
            });
    };
    render() {
        return (
            <View style={Styles.topContainer}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={Styles.textInputBox}>
                        <TextInput
                            style={Styles.textInput}
                            placeholder={'Category'}
                            value={this.state.form.category}
                            onChangeText={value =>
                                this.setFormData('category', value)
                            }
                        />
                    </View>
                    <View style={Styles.textInputBox}>
                        <TextInput
                            style={Styles.textInput}
                            placeholder={'Price'}
                            value={this.state.form.price}
                            onChangeText={value =>
                                this.setFormData('price', value)
                            }
                        />
                    </View>
                    <View>
                        <Button
                            style={Styles.formButton}
                            title={'Save'}
                            onPress={this.onSubmit}
                        />
                    </View>

                    {this.state.expenses.map(record => (
                        <View
                            key={record.id}
                            style={{borderWidth: 0.25, padding: 5}}>
                            <Text>
                                {record.category} - {record.price}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;
