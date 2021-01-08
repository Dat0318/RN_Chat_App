import React, {useEffect, useState} from 'react';
import {View, Image, Text, RefreshControl, FlatList} from 'react-native';
import styles from './styles';
import {Header} from '@components';
import {Images} from '@config/index';
import {getHeight} from '@common/index';

const DATA = [
  {
    name: 'Oswald Cobblepot',
    avatar: Images.ic_avatar1,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-08 07:15:35',
    last_message: "I'm the King of Gotham!",
  },
];
export default function Booking({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataChat, setDataChat] = useState([]);

  useEffect(() => {
    // Get the device token
  }, []);

  const onRefresh = () => {
    setIsRefreshing(true);
  };

  const Row = ({item}) => {
    return (
      <View>
        <View style={styles.viewImage}>
          <View style={styles.wrapImage}>
            <Image source={item.avatar} style={styles.avatar} />
          </View>
          {item.isRead === false && <View style={styles.read} />}
        </View>
        <View style={styles.info}>
          <View style={styles.flexD}>
            <Text style={styles.fromText}>{item.name}</Text>
            <Text style={styles.dateText}>{item.updatedAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.messageText}>
            {item.last_message}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header left="edit" title="Messages" right="info" />
      <FlatList
        data={dataChat}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item, index}) => <Row item={item} index={index} />}
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
