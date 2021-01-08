import React, {useEffect, useState} from 'react';
import {View, Image, Text, RefreshControl, FlatList} from 'react-native';
import styles from './styles';
import {Header} from '@components/index';
import {Images} from '@config/index';
import {getHeight} from '@common/index';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DATA = [
  {
    id: 1,
    title: 'Gotham City Police Department',
    time: '5 minutes ago',
    avatars: [
      Images.ic_avatar1,
      Images.ic_avatar2,
      Images.ic_avatar3,
      Images.ic_avatar4,
    ],
  },
  {
    id: 2,
    title: 'Wayne Enterprises',
    time: '2  days ago',
    avatars: [
      Images.ic_avatar1,
      Images.ic_avatar2,
      Images.ic_avatar3,
      Images.ic_avatar4,
      Images.ic_avatar5,
    ],
  },
  {
    id: 3,
    title: 'Falcone Crime Family',
    time: 'Saturday',
    avatars: [
      Images.ic_avatar1,
      Images.ic_avatar2,
      Images.ic_avatar3,
      Images.ic_avatar4,
      Images.ic_avatar5,
      Images.ic_avatar4,
      Images.ic_avatar2,
    ],
  },
  {
    id: 4,
    title: 'Arkham Asylum',
    time: 'Saturday',
    avatars: [Images.ic_avatar1, Images.ic_avatar3, Images.ic_avatar4],
  },
];
export default function Groups() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DATA);
  }, []);

  const onRefresh = () => {};

  const Item = ({item}) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemMore}>
          <TouchableOpacity
            onPress={() => {
              console.log('Click view more');
            }}>
            <Image style={styles.moreIcon} source={Images.ic_dots} />
          </TouchableOpacity>
        </View>
        <Text style={styles.itemTtl}>{item.title}</Text>
        <Text style={styles.itemDesc}>
          {item.time + ' • ' + item.avatars.length + ' members '}
        </Text>
        <View style={styles.itemMembers}>
          {item.avatars.map((element, index) => {
            return (
              <Image style={styles.itemAvatar} key={index} source={element} />
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header left="edit" title="Bookings" right="add" />
      <FlatList
        data={data}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item, index}) => <Item item={item} index={index} />}
        keyExtractor={(item, index) => `message ${index}`}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: getHeight(10)}}
        refreshControl={
          <RefreshControl
            tintColor={'#323bbb'}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
          />
        }
      />
    </View>
  );
}
