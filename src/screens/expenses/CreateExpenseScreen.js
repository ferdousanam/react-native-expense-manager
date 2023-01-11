import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Button, Icon, Input} from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Header from '../../components/Header';
import Styles from '../../styles';

const initialForm = {
    category: null,
    price: null,
    date: null,
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

    openDatePicker = () => {
        DateTimePickerAndroid.open({
            value: this.state.form.date
                ? new Date(this.state.form.date)
                : new Date(),
            maximumDate: new Date(),
            onChange: (event, selectedDate) => {
                if (event.type === 'set') {
                    this.setFormData(
                        'date',
                        selectedDate.toISOString().split('T')[0],
                    );
                }
            },
            mode: 'date',
            display: 'spinner',
            is24Hour: true,
        });
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
        return (
            <Header
                title={'Create Expense'}
                navigation={this.props.navigation}
            />
        );
    };

    render() {
        const {form, loading} = this.state;
        return (
            <>
                {this.renderHeader()}

                <View style={Styles.topContainer}>
                    <TouchableOpacity onPress={this.openDatePicker}>
                        <Input
                            editable={false}
                            style={Styles.textInput}
                            placeholder={'Date'}
                            value={form.date?.toLocaleString()}
                        />
                    </TouchableOpacity>
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
