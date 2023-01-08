import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from '../../constants';
import ExpenseNavigator from '../navigators/ExpenseNavigator';

class AfterAuth extends Component {
    render() {
        return (
            <>
                <StatusBar
                    backgroundColor={COLORS.primary}
                    barStyle="light-content"
                />
                <ExpenseNavigator />
            </>
        );
    }
}

export default AfterAuth;
