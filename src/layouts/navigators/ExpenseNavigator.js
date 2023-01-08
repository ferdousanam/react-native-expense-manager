import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';
import CreateExpenseScreen from '../../screens/CreateExpenseScreen';

const Stack = createStackNavigator();
class ExpenseNavigator extends Component {
    render() {
        return (
            <>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    <Stack.Screen
                        name="CreateExpenseScreen"
                        component={CreateExpenseScreen}
                    />
                </Stack.Navigator>
            </>
        );
    }
}

export default ExpenseNavigator;
