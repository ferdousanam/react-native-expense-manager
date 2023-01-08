import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button} from '@rneui/base';
import {Card, Icon, Input} from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';
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
            .orderBy('createdAt', 'asc')
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

    onEdit = item => {
        this.setState({form: item});
    };

    onDelete = id => {
        firestore()
            .collection('Expenses')
            .doc(id)
            .delete()
            .then(() => {
                const expenses = this.state.expenses.filter(i => i.id !== id);
                this.setState({expenses});
            });
    };

    render() {
        return (
            <>
                <Header title={'Home'} />

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

                    <Card>
                        <FlatList
                            data={this.state.expenses}
                            renderItem={({item}) => (
                                <View
                                    key={item.id}
                                    style={{borderWidth: 0.25, padding: 5}}>
                                    <Text>
                                        {item.category} - {item.price}
                                    </Text>
                                    <View
                                        style={[
                                            Styles.row,
                                            {marginVertical: 10},
                                        ]}>
                                        <View style={{marginRight: 5}}>
                                            <Button
                                                size={'sm'}
                                                color={'primary'}
                                                onPress={() =>
                                                    this.onEdit(item)
                                                }>
                                                <Icon
                                                    type="antdesign"
                                                    name="edit"
                                                    color="white"
                                                />
                                            </Button>
                                        </View>
                                        <View>
                                            <Button
                                                size={'sm'}
                                                color={'error'}
                                                onPress={() =>
                                                    this.onDelete(item.id)
                                                }>
                                                <Icon
                                                    type="antdesign"
                                                    name="delete"
                                                    color="white"
                                                />
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                    </Card>
                </View>
            </>
        );
    }
}

export default HomeScreen;
