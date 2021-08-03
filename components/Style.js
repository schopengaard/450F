import { StyleSheet, Platform, Dimensions, NativeModules } from 'react-native'

const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
const { StatusBarManager } = NativeModules
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT

export default StyleSheet.create({
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  underline: { textDecorationLine: 'underline' },
  statusBarBackground: {
    height: STATUSBAR_HEIGHT,
    ...Platform.select({
      ios: {
        backgroundColor: '#333',
      },
      android: {
        backgroundColor: '#333',
      },
    }),
  },
  changedContainer: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: windowWidth * 0.08,
    aspectRatio: 1 / 2,
    alignSelf: 'center',
    marginTop: windowWidth * 0.01,
  },
  title: {
    color: '#FF473C',
    fontFamily: 'RobotoMono',
    alignSelf: 'center',
    fontSize: windowWidth * 0.1,
    marginHorizontal: windowWidth * 0.03,
  },
  subtitle: {
    color: '#ccc',
    padding: 10,
    fontFamily: 'RobotoMono',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: windowWidth * 0.03,
    marginBottom: 10,
    width: windowWidth * 0.7,
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
    paddingTop: 0,
    padding: 3,
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 3,
  },
  buttonText: {
    fontFamily: 'RobotoMono',
    textAlign: 'center',
    fontSize: 15,
    padding: 5,
    paddingHorizontal: 10,
    color: '#fff',
  },
  button1: {
    backgroundColor: '#00000000',
    borderColor: '#FF473C',
  },
  button2: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  button1Text: {
    color: '#FF473C',
  },
  button2Text: {
    color: '#fff',
  },
  p: {
    alignSelf: 'center',
    fontSize: 20,
    fontFamily: 'RobotoMono',
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    fontSize: 16,
    textAlign: 'center',
    margin: 5,
    width: windowWidth * 0.7,
    alignSelf: 'center',
    height: 45,
    backgroundColor: '#00000015',
    borderRadius: windowHeight / 20,
  },
  h1: {
    fontFamily: 'RobotoMono',
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    padding: 5,
    color: '#000',
    width: windowWidth * 0.7,
    marginBottom: 10,
  },
  bottomButtonsContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.7,
    alignSelf: 'center',
  },
})
