import {StyleSheet} from 'react-native';
import {getHeight} from '@common/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
  },
  search: {
    backgroundColor: '#e6e6e6',
    paddingVertical: getHeight(15),
    paddingHorizontal: getHeight(15),
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: getHeight(10),
    borderRadius: getHeight(8),
  },
  searchIcon: {
    width: getHeight(15),
    height: getHeight(15),
    resizeMode: 'contain',
    marginRight: getHeight(5),
  },
  searchText: {
    fontSize: getHeight(19),
    color: '#b9b9b9',
  },
  //
  title: {
    backgroundColor: '#f8f8f8',
    paddingHorizontal: getHeight(15),
    paddingVertical: getHeight(10),
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: getHeight(1),
  },
  titleText: {
    fontSize: getHeight(19),
    color: '#b9b9b9',
  },
  titleTextRed: {
    color: '#df1a3d',
  },
  //
  item: {
    paddingHorizontal: getHeight(15),
    paddingVertical: getHeight(10),
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: getHeight(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemAvatar: {
    width: getHeight(50),
    height: getHeight(50),
    borderRadius: getHeight(25),
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  moreImage: {
    width: getHeight(50),
    height: getHeight(50),
  },
  itemDots: {},
  itemName: {
    flex: 1,
    marginLeft: getHeight(15),
  },
  itemGroupBtn: {flexDirection: 'row'},
  itemBtn: {
    marginRight: getHeight(10),
  },
  itemIcon: {
    width: getHeight(20),
    height: getHeight(23),
    resizeMode: 'contain',
    tintColor: '#b9b9b9',
  },
});

export default styles;
