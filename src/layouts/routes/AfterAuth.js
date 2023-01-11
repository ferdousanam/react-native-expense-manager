import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AfterAuthDrawer from '../../components/AfterAuthDrawer';
import ExpenseNavigator from '../navigators/ExpenseNavigator';
import {COLORS} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreateExpenseScreen from '../../screens/expenses/CreateExpenseScreen';

const Drawer = createDrawerNavigator();

class AfterAuth extends Component {
    render() {
        return (
            <Drawer.Navigator
                backBehavior={'initialRoute'}
                screenOptions={{
                    headerShown: false,
                    drawerActiveBackgroundColor: COLORS.primary,
                    drawerActiveTintColor: COLORS.white,
                    drawerInactiveTintColor: COLORS.black,
                    drawerLabelStyle: {
                        marginLeft: -25,
                        fontFamily: 'Roboto-Medium',
                        fontSize: 15,
                    },
                }}
                drawerContent={props => (
                    <AfterAuthDrawer {...props} {...this.props} />
                )}>
                <Drawer.Screen
                    name="Expenses"
                    component={ExpenseNavigator}
                    options={{
                        drawerLabel: 'Expenses',
                        unmountOnBlur: true,
                        drawerIcon: ({color, size}) => (
                            <Icon
                                name="cash-multiple"
                                color={color}
                                size={size}
                            />
                        ),
                    }}
                />
                <Drawer.Screen
                    name="CreateExpenseScreen"
                    component={CreateExpenseScreen}
                    options={{
                        drawerLabel: 'Create Expense',
                        unmountOnBlur: true,
                        drawerIcon: ({color, size}) => (
                            <Icon name="cash-plus" color={color} size={size} />
                        ),
                    }}
                />
            </Drawer.Navigator>
        );
    }
}

export default AfterAuth;
