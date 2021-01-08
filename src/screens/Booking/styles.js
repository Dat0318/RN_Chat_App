import {StyleSheet} from 'react-native';
import {getHeight} from '@common/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    backgroundColor: 'rgb(200, 199, 204)',
  },
  item: {
    paddingHorizontal: getHeight(20),
    paddingVertical: getHeight(40),
    position: 'relative',
    alignItems: 'center',
    marginVertical: getHeight(10),
    marginHorizontal: getHeight(20),
    borderColor: '#b9b9b9',
    backgroundColor: '#fff',
    borderRadius: getHeight(5),

    // box shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  itemMore: {
    position: 'absolute',
    top: getHeight(20),
    right: getHeight(20),
    transform: [{rotateZ: '90deg'}],
  },
  moreIcon: {
    width: getHeight(20),
    height: getHeight(20),
    resizeMode: 'contain',
    tintColor: '#b9b9b9',
  },
  itemTtl: {
    fontSize: getHeight(20),
    color: '#363636',
  },
  itemDesc: {
    fontSize: getHeight(13),
    color: '#b9b9b9',
    marginVertical: getHeight(15),
  },
  itemMembers: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: getHeight(10),
  },
  itemAvatar: {
    width: getHeight(30),
    height: getHeight(30),
    borderRadius: getHeight(20),
    resizeMode: 'cover',
    marginRight: getHeight(10),
  },
});

export default styles;
