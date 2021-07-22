import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    bold: { fontWeight: 'bold' },
    italic: { fontStyle: 'italic' },
    underline: { textDecorationLine: 'underline' },
    rootContainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 100,
        padding: 20,
    },
    title: {
        color: '#FF473C',
        fontFamily: 'RobotoMono',
        alignSelf: 'center',
        fontSize: 50,
        marginBottom: 10,
    },
    subtitle: {
        color: '#777',
        fontFamily: 'RobotoMono',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 10,
        padding: 10,
        marginBottom: 10,
    },
    logo: {
        /*width: '50%',
        height: undefined,
        aspectRatio: 1 / 1,*/
        width: 120,
        height: 120,
        alignSelf: 'center',
        margin: 30,
    },
    buttonContainer: {
        alignContent: 'center',
        padding: 20,
    },
    mainButton: {
        fontWeight: '600',
        paddingTop: 5,
        padding: 8,
        margin: 10,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#000',
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
    },
    button: {
        paddingTop: 5,
        padding: 8,
        alignSelf: 'center',
        backgroundColor: '#000',
        borderRadius: 20,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: '#000',
    },
    buttonText: {
        fontFamily: 'RobotoMono',
        textAlign: 'center',
        fontSize: 15,
        padding: 5,
        paddingHorizontal: 10,
        color: '#fff'
    },
    cancelButtonContainer: {},
    cancelButton: {
        flex: 0,
        padding: 8,
        alignSelf: 'center',
        backgroundColor: '#00000000',
        borderWidth: 3,
        borderColor: '#FF473C',
        borderRadius: 25,
        fontFamily: 'RobotoMono',
    },
    cancelButtonText: {
        color: '#FF473C',
    },
    p: {
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'RobotoMono',
        padding: 10,
        marginBottom: 10,
        color: '#fff'
    },
    input: {
        textAlign: 'center',
        margin: 10,
        height: 50,
        backgroundColor: '#00000000',
        borderColor: '#777',
        borderWidth: 3,
        borderRadius: 25,
    },
    h1: {
        fontFamily: 'RobotoMono',
        fontSize: 40,
        textAlign: 'center',
        textAlignVertical: 'center',
        padding: 8,
        color: '#FF473C',
        marginBottom: 20
    }
});