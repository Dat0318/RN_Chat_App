import {StyleSheet, Platform} from 'react-native';
import {getHeight, ScreenWidth} from '@common/index';

const styles = StyleSheet.create({
  viewRight: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: getHeight(15),
  },
  viewLeft: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: getHeight(15),
    alignItems: 'flex-end',
  },
  right: {
    backgroundColor: '#e7e7e7',
    width: '75%',
    alignItems: 'flex-end',
    paddingVertical: getHeight(10),
    paddingHorizontal: getHeight(15),
    borderTopRightRadius: getHeight(10),
    borderTopLeftRadius: getHeight(10),
    borderBottomLeftRadius: getHeight(10),
  },
  linearGradient: {
    width: '75%',
    paddingVertical: getHeight(10),
    paddingHorizontal: getHeight(15),
    borderTopRightRadius: getHeight(10),
    borderTopLeftRadius: getHeight(10),
    borderBottomRightRadius: getHeight(10),
  },
  avatar: {
    width: getHeight(30),
    height: getHeight(30),
    resizeMode: 'contain',
    borderRadius: getHeight(15),
    marginRight: getHeight(10),
    opacity: 1,
    marginBottom: getHeight(20),
  },
  textChat: {
    fontSize: 15,
  },
  time: {
    fontSize: getHeight(15),
    color: '#999',
  },
  sendMess: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getHeight(50),
    width: ScreenWidth,
  },
  input: {
    height: '100%',
    borderTopColor: '#e0e0e0',
    borderTopWidth: 1,
    flex: 1,
    paddingHorizontal: getHeight(15),
  },
  btnSend: {
    width: getHeight(80),
    height: '100%',
  },
  send: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  ic_send: {
    width: getHeight(50),
    height: getHeight(30),
    resizeMode: 'contain',
  },
  // style for header
  header_v1: {
    height: getHeight(200),
    backgroundColor: 'lightblue',
    borderBottomRightRadius: getHeight(20),
    borderBottomLeftRadius: getHeight(20),
    overflow: 'hidden',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  headerContent: {
    alignSelf: 'center',
    padding: getHeight(15),
  },
  headerTtl: {
    fontSize: getHeight(30),
  },
  headerSend: {
    tintColor: 'yellow',
    width: getHeight(30),
    height: getHeight(30),
    resizeMode: 'contain',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: getHeight(10),
  },
  headerBtn: {
    marginTop: getHeight(20),
    backgroundColor: '#e0e0e0',
    borderRadius: getHeight(5),
    padding: getHeight(10),
    minWidth: getHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  // style header copy
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    // paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
