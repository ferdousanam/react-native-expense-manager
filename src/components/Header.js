import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {Header as HeaderRNE} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Header = ({title}) => {
    const openGithub = () => {
        Linking.openURL('https://github.com/ferdousanam');
    };

    const openFacebook = () => {
        Linking.openURL('https://facebook.com/ferdous.anam');
    };

    return (
        <>
            <HeaderRNE
                leftComponent={{
                    icon: 'menu',
                    color: '#fff',
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
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#397af8',
        marginBottom: 20,
        width: '100%',
        paddingVertical: 15,
    },
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
    subheaderText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;
