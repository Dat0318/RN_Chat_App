import React, {useEffect, useState} from 'react';
import {View, Image, Text, RefreshControl} from 'react-native';
import styles from './styles';
import {Header, Swipeable} from '@components/index';
import {
  RectButton,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Images} from '@config/index';
import {getHeight} from '@common/index';
import {socket} from '@services/index';
import moment from 'moment';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {notificationManager} from './NotificationManager';

const DATA = [
  {
    name: 'Oswald Cobblepot',
    avatar: Images.ic_avatar1,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-08 07:15:35',
    last_message: "I'm the King of Gotham!",
  },
  {
    name: 'Fish Mooney',
    avatar: Images.ic_avatar2,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-08 17:15:35',
    last_message: 'Please don\'t call me "babes."',
  },
  {
    name: 'Bruce Wayne',
    avatar: Images.ic_avatar3,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-08 09:15:35',
    last_message: 'Sometimee the right way is also the ugly way.',
  },
  {
    name: 'Barbara Kean',
    avatar: Images.ic_avatar4,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-07 07:15:35',
    last_message: "It's Gotham, baby, we've all got flair!",
  },
  {
    name: 'Edward Nygma',
    avatar: Images.ic_avatar5,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-07 07:15:35',
    last_message: 'No body, no crime.',
  },
  {
    name: 'Selina Kyle',
    avatar: Images.ic_avatar1,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-07 07:15:35',
    last_message: 'Cat got your tongue?',
  },
  {
    name: 'Harvey Bullock',
    avatar: Images.ic_avatar2,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-07 07:15:35',
    last_message: 'I thought I was supposed to be the bad guy here?',
  },
  {
    name: 'Jim Gordon',
    avatar: Images.ic_avatar5,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-07 07:15:35',
    last_message:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed d',
  },
  {
    name: 'Fish Mooney',
    avatar: Images.ic_avatar2,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-08 17:15:35',
    last_message: 'Please don\'t call me "babes."',
  },
  {
    name: 'Bruce Wayne',
    avatar: Images.ic_avatar3,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-08 09:15:35',
    last_message: 'Sometimee the right way is also the ugly way.',
  },
  {
    name: 'Barbara Kean',
    avatar: Images.ic_avatar4,
    room_id: 15,
    isRead: true,
    updatedAt: '2021-01-07 07:15:35',
    last_message: "It's Gotham, baby, we've all got flair!",
  },
];
export default function Home({navigation}) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataChat, setDataChat] = useState([]);

  useEffect(() => {
    // Get the device token
    messaging()
      .getToken()
      .then((token) => {
        console.log('TOKEN: ', token);
      });
  }, []);

  const init = () => {
    socket.send('/chat/goOnline', {}, (response) => {});
    listenSocket();
  };

  const listenSocket = () => {
    socket.listen('new_message', (data) => {
      getDataChat();
    });
  };

  const onRefresh = () => {
    setIsRefreshing(true);
    getDataChat();
  };

  const getDataChat = async () => {
    setDataChat(DATA);
    setIsRefreshing(false);
  };

  useEffect(() => {
    init();
    getDataChat();
  }, []);

  const Row = ({item}) => {
    const check =
      moment(item.updatedAt, 'YYYY-MM-DD HH:mm:ss').format('YYYY-MM-DD') ===
      moment(new Date()).format('YYYY-MM-DD');
    return (
      <RectButton
        style={styles.rectButton}
        onPress={() =>
          navigation.navigate('Chat', {
            name: item.name,
            image: item.avatar,
            room_id: item.id,
          })
        }>
        <View style={styles.viewImage}>
          <View style={styles.wrapImage}>
            <Image source={item.avatar} style={styles.avatar} />
          </View>
          {item.isRead === false && <View style={styles.read} />}
        </View>
        <View style={styles.info}>
          <View style={styles.flexD}>
            <Text style={styles.fromText}>{item.name}</Text>
            <Text style={styles.dateText}>
              {check
                ? moment(item.updatedAt, 'YYYY-MM-DD HH:mm:ss').format(
                    'HH:mm A',
                  )
                : moment(item.updatedAt, 'YYYY-MM-DD HH:mm:ss').fromNow()}
            </Text>
          </View>
          <Text numberOfLines={1} style={styles.messageText}>
            {item.last_message}
          </Text>
        </View>
      </RectButton>
    );
  };

  const SwipeableRow = ({item, index}) => {
    return (
      <Swipeable>
        <Row item={item} />
      </Swipeable>
    );
  };

  useEffect(() => {
    PushNotification.configure({
      onRegister: function (token) {},
      onNotification: function (notification) {
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }, []);

  const testPush = () => {
    console.log('PUSH TEST');
    PushNotification.localNotification({
      title: 'Notification is ready to use', // (optional)
      message: 'Notification message is here ....', // (required)
    });
  };

  useEffect(() => {
    let localNotify = notificationManager;
    localNotify.configure();
  }, []);

  return (
    <View style={styles.container}>
      <Header left="edit" title="Messages" right="info" />
      <FlatList
        data={dataChat}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({item, index}) => (
          <SwipeableRow item={item} index={index} />
        )}
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
      <View style={styles.testPush}>
        <TouchableOpacity onPress={() => testPush()}>
          <Text style={styles.textPush}>PushNotification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
