import {StyleSheet} from 'react-native';
import {getStatusBarHeight, getHeight, fontFamily} from '@common/index';

const styles = StyleSheet.create({
  header: {
    marginTop: getStatusBarHeight(),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: getHeight(20),
    paddingVertical: getHeight(15),
    borderBottomColor: 'rgba(180, 180, 180, 0.4)',
    borderBottomWidth: getHeight(1),
  },
  left: {
    flex: 0.3,
    alignItems: 'flex-start',
  },
  center: {
    flex: 1,
    flexGrow: 1,
  },
  right: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  titleSmall: {
    textAlign: 'center',
    fontFamily: fontFamily.f3,
    color: '#fff',
    fontSize: getHeight(11.12),
  },
  title: {
    textAlign: 'center',
    fontFamily: fontFamily.f3,
    color: '#999',
    fontSize: getHeight(18.76),
  },
  icon: {
    height: getHeight(20),
    width: getHeight(21),
    resizeMode: 'contain',
    tintColor: '#e2223a',
  },
  hasNotify: {
    backgroundColor: '#ff7e00',
    width: getHeight(10),
    height: getHeight(10),
    borderRadius: getHeight(5),
    position: 'absolute',
    right: 3,
    top: 0,
  },
  icon_present: {
    height: getHeight(30),
    width: getHeight(24),
    resizeMode: 'contain',
  },
  titleLogo: {
    fontSize: getHeight(18.76),
    color: '#fff',
    fontWeight: 'bold',
  },
  edit: {
    color: '#e2223a',
  },
});

export default styles;
