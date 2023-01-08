import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Button} from '@rneui/base';
import {Card, Icon} from '@rneui/themed';
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';
import Styles from '../styles';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        };

        this.loadItems();
    }

    loadItems = () => {
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
    };

    onCreate = () => {
        this.props.navigation.navigate('CreateExpenseScreen');
    };

    onEdit = item => {
        this.props.navigation.navigate('CreateExpenseScreen', {item: item});
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
                    <View>
                        <Button
                            style={Styles.formButton}
                            title={'Create'}
                            onPress={this.onCreate}
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
