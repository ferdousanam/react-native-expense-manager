import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';
import Styles from '../styles/Styles';

class InitialLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
        };
    }

    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.centerMiddleContainer}>
                    <ActivityIndicator />
                </View>
            </View>
        );
    }
}

export default InitialLoader;
