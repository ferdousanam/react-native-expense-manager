import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                category: null,
                price: null,
            },
        };

        const usersCollection = firestore().collection('Expenses');
        console.log(usersCollection);
    }
    setFormData = (key, value) => {
        this.setState({form: {...this.state.form, [key]: value}});
    };
    onSubmit = () => {
        console.log(this.state.form);
        firestore()
            .collection('Expenses')
            .add({
                ...this.state.form,
                createdAt: firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                console.log('Expenses added!');
            });
    };
    render() {
        return (
            <View>
                <Text>Home Screen</Text>
                <TextInput
                    placeholder={'Category'}
                    value={this.state.form.category}
                    onChangeText={value => this.setFormData('category', value)}
                />
                <TextInput
                    placeholder={'Price'}
                    value={this.state.form.price}
                    onChangeText={value => this.setFormData('price', value)}
                />
                <Button title={'Save'} onPress={this.onSubmit} />
            </View>
        );
    }
}

export default HomeScreen;
