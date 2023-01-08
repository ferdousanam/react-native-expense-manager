import CreateExpenseScreen from './CreateExpenseScreen';
import firestore from '@react-native-firebase/firestore';
import Header from '../../components/Header';
import React from 'react';

class EditExpenseScreen extends CreateExpenseScreen {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            form: props.route.params.item,
        };
    }

    renderHeader = () => {
        return <Header title={'Edit Expense'} />;
    };

    onSubmit = () => {
        this.setState({loading: true});
        const {id, ...form} = this.state.form;
        firestore()
            .collection('Expenses')
            .doc(id)
            .update({
                ...form,
                updatedAt: firestore.FieldValue.serverTimestamp(),
            })
            .then(() => {
                this.setState({loading: false});
            });
    };
}

export default EditExpenseScreen;
