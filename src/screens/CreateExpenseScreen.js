import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/base';
import {Input} from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';
import Styles from '../styles';

const initialForm = {
    category: null,
    price: null,
};

class CreateExpenseScreen extends Component {
    constructor(props) {
        super(props);
        const item = props.route.params ? props.route.params.item : null;

        this.state = {
            form: item || initialForm,
        };
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
                    // const expenses = this.state.expenses;
                    // expenses.push({
                    //     id: documentSnapshot.id,
                    //     ...documentSnapshot.data(),
                    // });
                    // this.setState({expenses, form: initialForm});
                    this.setState({form: initialForm});
                });
            });
    };

    onEdit = item => {
        this.setState({form: item});
    };

    render() {
        return (
            <>
                <Header title={'Create Expense'} />

                <View style={Styles.topContainer}>
                    <Input
                        style={Styles.textInput}
                        placeholder={'Category'}
                        value={this.state.form.category}
                        onChangeText={value =>
                            this.setFormData('category', value)
                        }
                    />
                    <Input
                        style={Styles.textInput}
                        placeholder={'Price'}
                        value={this.state.form.price}
                        onChangeText={value => this.setFormData('price', value)}
                    />
                    <View>
                        <Button
                            style={Styles.formButton}
                            title={'Save'}
                            onPress={this.onSubmit}
                        />
                    </View>
                </View>
            </>
        );
    }
}

export default CreateExpenseScreen;
