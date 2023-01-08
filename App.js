import type {Node} from 'react';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import Styles from './src/styles';

const App: () => Node = () => {
    return (
        <SafeAreaProvider>
            <HomeScreen />
        </SafeAreaProvider>
    );
};

export default App;
