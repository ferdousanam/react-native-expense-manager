import {StyleSheet} from 'react-native';
import {COLORS} from '../constants';

const borderColor = '#000';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    centerMiddleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    topContainer: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    topContainerCenter: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },
    scrollViewContainer: {
        marginBottom: 20,
    },
    siteColor: {
        color: COLORS.primary,
    },
    siteColorWhite: {
        color: '#ffffff',
    },
    siteColorBlack: {
        color: '#000000',
    },
    siteColorGray: {
        color: '#666666',
    },
    siteBg: {
        backgroundColor: COLORS.primary,
    },
    siteBgWhite: {
        backgroundColor: '#ffffff',
    },
    siteBgWarning: {
        backgroundColor: '#fff0e9',
    },
    logo: {
        alignSelf: 'center',
        width: 300,
        height: 55,
    },
    header: {
        backgroundColor: COLORS.primary,
        color: '#fff',
    },
    footer: {
        backgroundColor: COLORS.primary,
        color: '#fff',
    },
    sitePadding: {
        padding: 10,
    },
    siteMargin: {
        margin: 15,
    },
    marginTop: {
        marginTop: 15,
    },
    marginBottom: {
        marginBottom: 15,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    textCenter: {
        textAlign: 'center',
    },
    borderBottom: {
        borderBottomColor: borderColor,
        borderBottomWidth: 0.2,
    },
    borderTop: {
        borderBottomColor: borderColor,
        borderBottomWidth: 0.2,
    },

    //Form Design...
    formGroup: {
        marginTop: 15,
    },
    formControl: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        backgroundColor: '#E9EAEE',
        paddingHorizontal: 20,
    },
    formControlPicker: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        paddingHorizontal: 14,
    },
    formGroupBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        borderWidth: 0.5,
        borderColor: COLORS.gray,
    },
    formLabel: {
        color: '#000',
        marginTop: 5,
    },
    formButtonBox: {
        alignItems: 'center',
        marginTop: 50,
    },
    formButton: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    formButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textInput: {
        flex: 1,
        // marginTop: Platform.OS === 'ios' ? 0 : -12,
        color: '#05375a',
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    textInputBox: {
        flex: 1,
        color: '#05375a',
        textAlign: 'center',
        paddingVertical: 5,
    },
    textAreaInput: {
        flex: 1,
        paddingLeft: 10,
        height: 150,
    },

    //Auth Design...
    authHeader: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    authFooter: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    authFooterTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    authFooterText: {
        color: '#000',
        marginTop: 5,
    },
    fontSize20: {
        fontSize: 20,
    },
    fontSize25: {
        fontSize: 25,
    },
    fontSize30: {
        fontSize: 30,
    },
    listBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    flatListContainer: {
        flexGrow: 1,
    },
    shadow: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3, // For Android
    },
    applyCoupon: {
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        paddingVertical: 0,
    },
    nextButtonBox: {
        flex: 1,
        padding: 10,
    },
    nextButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Transformation Styles
    flip: {
        transform: [
            {
                scaleX: -1,
            },
        ],
    },
});
