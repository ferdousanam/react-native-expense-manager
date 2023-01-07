import type {Node} from 'react';
import React from 'react';
import {SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Styles from './src/styles';

const App: () => Node = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <HomeScreen />
        </SafeAreaView>
    );
};

export default App;
