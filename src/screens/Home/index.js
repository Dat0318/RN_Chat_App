import React, {useEffect, useState} from 'react';
import {View, Image, Text, RefreshControl} from 'react-native';
import styles from './styles';
import {Header, Swipeable} from '@components';
import {
  RectButton,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {Images} from '@config/index';
import {getHeight} from '@common/index';
import {socket, general} from '@services/index';
import moment from 'moment';
import {Config} from '@config';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {notificationManager} from './NotificationManager';

const DATA = [];
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
    // let result = await general.Chat.getListChat('chat');
    // setDataChat(result.data.data);
    setDataChat(DATA);
    setIsRefreshing(false);
  };

  useEffect(() => {
    init();
    getDataChat();
  }, []);

  const Row = ({item}) => {
    return (
      <RectButton
        style={styles.rectButton}
        onPress={() =>
          navigation.navigate('Chat', {
            name: item.name,
            image:
              item.avatar !== null
                ? {
                    uri: Config.base_url + item.avatar,
                  }
                : Images.ic_avatar1,
            room_id: item.id,
          })
        }>
        <View style={styles.viewImage}>
          <View style={styles.wrapImage}>
            <Image
              source={
                item.avatar !== null
                  ? {
                      uri: Config.base_url + item.avatar,
                    }
                  : Images.ic_avatar1
              }
              style={styles.avatar}
            />
          </View>
          {item.isRead === false && <View style={styles.read} />}
        </View>
        <View style={styles.info}>
          <View style={styles.flexD}>
            <Text style={styles.fromText}>{item.name}</Text>
            <Text style={styles.dateText}>
              {moment(item.updatedAt, 'YYY-MM-DD hh:mm:ss').format('hh:mm A')}
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
        // console.log('NOTIFICATION:', notification);
        // notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      // onAction: function (notification) {
      //   console.log('ACTION:', notification.action);
      //   console.log('NOTIFICATION:', notification);
      // },
      // onRegistrationError: function (err) {
      //   console.error(err.message, err);
      // },
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
      title: 'My Notification Title', // (optional)
      message: 'My Notification Message', // (required)
    });
  };

  var localNotify = null;

  useEffect(() => {
    let localNotify = notificationManager;
    localNotify.configure();
  }, []);

  const onPressSendNotification = () => {
    localNotify.showNotification(
      1,
      'App Notification',
      'Local Notification',
      {}, //data
      {}, //options
    );
  };

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
      <View>
        <TouchableOpacity onPress={() => testPush()}>
          <Text>PushNotification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
