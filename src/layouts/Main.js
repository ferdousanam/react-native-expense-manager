import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {isMountedRef, navigationRef} from './RootNavigation';
import {COLORS} from '../constants';
import InitialLoader from './InitialLoader';
import AfterAuth from './routes/AfterAuth';

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
        <>
            <NavigationContainer ref={navigationRef} theme={AppTheme}>
                <AfterAuth />
            </NavigationContainer>
        </>
    );
};

export default Main;
