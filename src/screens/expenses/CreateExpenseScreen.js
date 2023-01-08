import React, {Component} from 'react';
import {View} from 'react-native';
import {Button} from '@rneui/base';
import {Icon, Input} from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
import Styles from '../../styles';

const initialForm = {
    category: null,
    price: null,
};

class CreateExpenseScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            form: initialForm,
        };
    }

    setFormData = (key, value) => {
        this.setState({form: {...this.state.form, [key]: value}});
    };

    onSubmit = () => {
        this.setState({loading: true});
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
                this.setState({loading: false});
            });
    };

    renderHeader = () => {
        return <Header title={'Create Expense'} />;
    };

    render() {
        const {form, loading} = this.state;
        return (
            <>
                {this.renderHeader()}

                <View style={Styles.topContainer}>
                    <Input
                        style={Styles.textInput}
                        placeholder={'Category'}
                        value={form.category}
                        onChangeText={value =>
                            this.setFormData('category', value)
                        }
                    />
                    <Input
                        style={Styles.textInput}
                        placeholder={'Price'}
                        value={form.price}
                        onChangeText={value => this.setFormData('price', value)}
                        keyboardType={'numeric'}
                    />
                    <View>
                        <Button
                            style={Styles.formButton}
                            onPress={this.onSubmit}
                            loading={loading}>
                            Save
                            <Icon name="save" color="white" />
                        </Button>
                    </View>
                </View>
            </>
        );
    }
}

export default CreateExpenseScreen;
