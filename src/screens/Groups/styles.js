import {StyleSheet} from 'react-native';
import {getHeight} from '@common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rectButton: {
    flex: 1,
    paddingVertical: getHeight(10),
    paddingHorizontal: getHeight(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
    height: StyleSheet.hairlineWidth,
  },
  fromText: {
    backgroundColor: 'transparent',
    fontSize: getHeight(18),
  },
  messageText: {
    color: '#999',
    backgroundColor: 'transparent',
    fontSize: getHeight(15),
  },
  dateText: {
    color: '#999',
    fontSize: getHeight(16),
  },
  viewImage: {
    position: 'relative',
  },
  wrapImage: {
    width: getHeight(55),
    height: getHeight(55),
    borderRadius: getHeight(27.5),
    overflow: 'hidden',
  },
  avatar: {
    width: getHeight(55),
    height: getHeight(55),
    borderRadius: getHeight(27.5),
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    marginLeft: getHeight(15),
    justifyContent: 'space-between',
    height: '100%',
    paddingVertical: getHeight(2),
  },
  flexD: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  read: {
    width: getHeight(15),
    height: getHeight(15),
    backgroundColor: '#e32538',
    borderRadius: getHeight(7.5),
    borderWidth: getHeight(2),
    borderColor: '#fff',
    position: 'absolute',
    top: getHeight(2),
    right: getHeight(-2),
    zIndex: 1,
  },
});

export default styles;
