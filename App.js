import type {Node} from 'react';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/layouts/Main';

const App: () => Node = () => {
    return (
        <SafeAreaProvider>
            <Main />
        </SafeAreaProvider>
    );
};

export default App;
