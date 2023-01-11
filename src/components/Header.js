import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Header as HeaderRNE} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../constants';

const Header = ({title, navigation}) => {
    const openGithub = () => {
        Linking.openURL('https://github.com/ferdousanam');
    };

    const openFacebook = () => {
        Linking.openURL('https://facebook.com/ferdous.anam');
    };

    return (
        <>
            <HeaderRNE
                backgroundColor={COLORS.primary}
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
                    onPress: () => navigation.openDrawer(),
                }}
                rightComponent={
                    <View style={styles.headerRight}>
                        <TouchableOpacity onPress={openGithub}>
                            <FontAwesome5
                                name="github"
                                color="white"
                                size={25}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{marginLeft: 10}}
                            onPress={openFacebook}>
                            <FontAwesome5
                                name="facebook"
                                color="white"
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                }
                centerComponent={{
                    text: title || null,
                    style: styles.heading,
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
    },
});

export default Header;
