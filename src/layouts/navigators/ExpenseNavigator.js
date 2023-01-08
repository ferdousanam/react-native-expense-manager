import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import CreateExpenseScreen from '../../screens/expenses/CreateExpenseScreen';
import EditExpenseScreen from '../../screens/expenses/EditExpenseScreen';

const Stack = createStackNavigator();
class ExpenseNavigator extends Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen
                    name="CreateExpenseScreen"
                    component={CreateExpenseScreen}
                />
                <Stack.Screen
                    name="EditExpenseScreen"
                    component={EditExpenseScreen}
                />
            </Stack.Navigator>
        );
    }
}

export default ExpenseNavigator;
