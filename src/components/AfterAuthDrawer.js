import React from 'react';
import {ToastAndroid, View} from 'react-native';
import {Text} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NavStyles from '../styles/Nav';
import {COLORS} from '../constants';

const UserInfo = props => {
    return (
        <View style={NavStyles.userInfoSection}>
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: 15,
                }}>
                <Avatar
                    size={50}
                    rounded
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/40851904?s=96',
                    }}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        paddingLeft: 10,
                    }}>
                    <Text style={{color: COLORS.white}}>Ferdous Anam</Text>
                    <Text style={{color: COLORS.white, fontSize: 11}}>
                        ferdous.anam@gmail.com
                    </Text>
                </View>
            </View>
        </View>
    );
};

const AfterAuthDrawer = props => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{backgroundColor: COLORS.primary}}>
                <UserInfo />
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.white,
                        paddingTop: 10,
                    }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View
                style={{
                    paddingVertical: 10,
                    borderTopWidth: 1,
                    borderColor: COLORS.ash,
                }}>
                <DrawerItem
                    labelStyle={{
                        color: COLORS.black,
                        marginLeft: -25,
                        fontFamily: 'Roboto-Medium',
                        fontSize: 15,
                    }}
                    icon={({size}) => (
                        <Icon
                            name="exit-to-app"
                            color={COLORS.black}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        ToastAndroid.showWithGravity(
                            'Unable to sign out right now!',
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER,
                        );
                    }}
                />
            </View>
        </View>
    );
};

export default AfterAuthDrawer;
