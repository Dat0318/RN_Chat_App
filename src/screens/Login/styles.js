import {StyleSheet} from 'react-native';
import {getHeight} from '@common/index';
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
  },
  appName: {
    fontSize: getHeight(60),
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: getHeight(20),
  },
  intro: {
    fontSize: getHeight(20),
    color: '#fff',
    paddingBottom: getHeight(120),
  },
  ViewScreen: {
    alignItems: 'center',
  },
  ViewInput: {
    backgroundColor: '#9e1a27',
    width: '80%',
    borderRadius: getHeight(30),
    color: '#fff',
  },
  input: {
    borderBottomWidth: 0,
    color: '#fff',
  },
  btn: {
    backgroundColor: '#fff',
    width: '80%',
    paddingVertical: getHeight(15),
    borderRadius: getHeight(30),
    marginTop: getHeight(30),
    marginBottom: getHeight(15),
  },
  textSignUp: {
    textAlign: 'center',
    color: '#e2223a',
    fontSize: getHeight(20),
  },
  textSignIn: {
    color: '#fff',
  },
  // login social
  socialGroups: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getHeight(30),
  },
  socialBtn: {
    width: getHeight(40),
    height: getHeight(40),
    borderRadius: getHeight(5),
    backgroundColor: '#4167b2',
    marginRight: getHeight(40),
  },
  socialIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
export default styles;
