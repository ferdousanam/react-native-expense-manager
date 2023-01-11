import React, {useEffect, useState} from 'react';
import {createTheme, ThemeProvider} from '@rneui/themed';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './RootNavigation';
import {COLORS} from '../constants';
import InitialLoader from './InitialLoader';
import AfterAuth from './routes/AfterAuth';

const theme = createTheme({
    lightColors: {
        primary: COLORS.primary,
    },
    darkColors: {
        primary: COLORS.primary,
    },
});

const AppTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: COLORS.white,
    },
};

const Main = props => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        isMountedRef.current = true;

        return () => (isMountedRef.current = false);
    }, []);

    if (isLoading) {
        return <InitialLoader />;
    }

    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer ref={navigationRef} theme={AppTheme}>
                <AfterAuth />
            </NavigationContainer>
        </ThemeProvider>
    );
};

export default Main;
