import {StyleSheet} from 'react-native';
import {getHeight} from '@common/index';

const styles = StyleSheet.create({
  scroll: {},
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: getHeight(10),
  },
  headerAvatar: {
    width: getHeight(120),
    height: getHeight(120),
    borderRadius: getHeight(75),
    overflow: 'hidden',
    resizeMode: 'contain',
    top: getHeight(-15),
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerName: {
    fontSize: getHeight(24),
    color: '#fff',
    marginTop: getHeight(-5),
    marginBottom: getHeight(15),
  },
  headerDesc: {
    fontSize: getHeight(15),
    width: '90%',
    color: '#fff',
    textAlign: 'center',
    marginBottom: getHeight(50),
  },
  //
  body: {
    flex: 2,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: getHeight(15),
    paddingHorizontal: getHeight(15),
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: getHeight(1),
  },
  itemName: {
    flex: 1,
    flexGrow: 1,
    fontSize: getHeight(16),
    color: '#363636',
  },
  itemNameActive: {
    color: '#da0945',
  },
  itemVale: {
    fontSize: getHeight(16),
    color: '#b9b9b9',
  },
  itemIcon: {
    width: getHeight(17),
    height: getHeight(15),
    resizeMode: 'contain',
    marginLeft: getHeight(10),
  },
});

export default styles;
