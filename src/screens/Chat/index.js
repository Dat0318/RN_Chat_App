/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef} from 'react';
import {View, Image, Text, Animated, Platform} from 'react-native';
import styles from './styles';
import {Header} from '@components';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '@config/index';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import {socket, general} from '@services';
import moment from 'moment';

const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const data = [
  {
    id: 612,
    room_id: 15,
    sender_id: 1,
    message: 'Átysye',
    createdAt: '2020-09-17 16:53:13',
  },
  {
    id: 609,
    room_id: 15,
    sender_id: 2,
    message: 'Thhff',
    createdAt: '2020-09-17 16:44:31',
  },
  {
    id: 608,
    room_id: 15,
    sender_id: 2,
    message: '  Fhjtg',
    createdAt: '2020-09-17 16:44:0',
  },
  {
    id: 607,
    room_id: 15,
    sender_id: 1,
    message: 'Gsgshdh',
    createdAt: '2020-09-17 16:43:39',
  },
  {
    id: 606,
    room_id: 15,
    sender_id: 1,
    message: 'Bnms',
    createdAt: '2020-09-17 16:42:55',
  },
  {
    id: 605,
    room_id: 15,
    sender_id: 1,
    message: 'Fghbv',
    createdAt: '2020-09-17 16:42:49',
  },
  {
    id: 604,
    room_id: 15,
    sender_id: 2,
    message: 'Gbnmh',
    createdAt: '2020-09-17 16:42:44',
  },
  {
    id: 603,
    room_id: 15,
    sender_id: 1,
    message: 'Hgmn',
    createdAt: '2020-09-17 16:42:28',
  },
  {
    id: 602,
    room_id: 15,
    sender_id: 2,
    message: 'Yhhmn',
    createdAt: '2020-09-17 16:41:58',
  },
  {
    id: 601,
    room_id: 15,
    sender_id: 1,
    message: 'Yêu',
    createdAt: '2020-09-17 16:39:37',
  },
  {
    id: 600,
    room_id: 15,
    sender_id: 2,
    message: 'Hêuue',
    createdAt: '2020-09-17 16:39:33',
  },
  {
    id: 599,
    room_id: 15,
    sender_id: 1,
    message: 'Ygickh',
    createdAt: '2020-09-17 16:36:06',
  },
  {
    id: 598,
    room_id: 15,
    sender_id: 1,
    message: 'Có 5yy',
    createdAt: '2020-09-17 16:35:3',
  },
  {
    id: 597,
    room_id: 15,
    sender_id: 2,
    message: 'Ỵhc',
    createdAt: '2020-09-17 16:35:16',
  },
  {
    id: 596,
    room_id: 15,
    sender_id: 2,
    message: 'Yhiy',
    createdAt: '2020-09-17 16:33:35',
  },
  {
    id: 595,
    room_id: 15,
    sender_id: 1,
    message: 'Uyttgh',
    createdAt: '2020-09-17 16:33:32',
  },
  {
    id: 594,
    room_id: 15,
    sender_id: 1,
    message: 'Thhf',
    createdAt: '2020-09-17 16:33:22',
  },
  {
    id: 593,
    room_id: 15,
    sender_id: 2,
    message: 'Yygg',
    createdAt: '2020-09-17 16:31:48',
  },
  {
    id: 592,
    room_id: 15,
    sender_id: 2,
    message: 'Yiggy',
    createdAt: '2020-09-17 16:31:40',
  },
  {
    id: 591,
    room_id: 15,
    sender_id: 2,
    message: 'name',
    createdAt: '2020-09-17 15:38:09',
  },
  {
    id: 590,
    room_id: 15,
    sender_id: 1,
    message: 'the a',
    createdAt: '2020-09-17 15:37:4',
  },
  {
    id: 589,
    room_id: 15,
    sender_id: 2,
    message: 'Hello',
    createdAt: '2020-09-17 15:18:58',
  },
  {
    id: 588,
    room_id: 15,
    sender_id: 1,
    message: 'à thế à',
    createdAt: '2020-09-17 14:3',
  },
  {
    id: 587,
    room_id: 15,
    sender_id: 2,
    message: 'jbjbi',
    createdAt: '2020-09-17 14:22:58',
  },
  {
    id: 586,
    room_id: 15,
    sender_id: 1,
    message: 'hello',
    createdAt: '2020-09-17 14:20:25',
  },
  {
    id: 585,
    room_id: 15,
    sender_id: 2,
    message: 'Y',
    createdAt: '2020-09-17 14:19:38',
  },
  {
    id: 584,
    room_id: 15,
    sender_id: 1,
    message: 'Tgu',
    createdAt: '2020-09-17 14:14:29',
  },
  {
    id: 583,
    room_id: 15,
    sender_id: 1,
    message: 'Thhuh',
    createdAt: '2020-09-17 14:14:25',
  },
  {
    id: 530,
    room_id: 15,
    sender_id: 2,
    message: 'abc abc',
    createdAt: '2020-09-15 14:12:0',
  },
];

function Chat({route}) {
  const {name, image, room_id} =
    route.params !== undefined
      ? route.params
      : {image: Images.ic_avatar2, name: "D'Artagnan", room_id: 15};
  const [msg, setMsg] = useState('');
  const refContainer = useRef();
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [page, setPage] = useState(0);
  const [listMessages, setListMessages] = useState([]);
  const [height, setHeight] = useState(0);
  const [check, setCheck] = useState(true);
  const [iconHeight, setIconHeight] = useState(0);
  const fadeAnim = new Animated.Value(1);
  const scrollY = new Animated.Value(0);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    listenSocket();
    await getData();
  };

  const onLoadMore = () => {
    setIsLoadMore(true);
    setPage(page + 1);
  };

  const getData = async () => {
    let result = await general.Chat.getListMessages(room_id, page, 50);
    if (result.data.status === 1) {
      isLoadMore
        ? setListMessages((oldData) =>
            oldData.concat(result.data.data.messages.reverse()),
          )
        : setListMessages(result.data.data.messages.reverse());
    } else {
      Toast.show(result.data.message);
    }
    setIsLoadMore(false);
  };

  const listenSocket = () => {
    socket.listen('new_message', (data) => {
      if (data.sender_id !== 2) {
        setListMessages((oldData) => [data, ...oldData]);
      }
    });
  };

  const ChatDetail = ({item}) => {
    return (
      <View>
        {item.sender_id === 1 ? (
          <View style={styles.viewRight}>
            <View style={styles.right}>
              <Text style={styles.textChat}>{item.message}</Text>
            </View>
          </View>
        ) : (
          <View style={styles.viewLeft}>
            <Image source={image} style={styles.avatar} />
            <View style={{flex: 1}}>
              <LinearGradient
                colors={['#da0845', '#e52b36', '#eb3f2d']}
                style={styles.linearGradient}>
                <Text style={[styles.textChat, {color: '#fff'}]}>
                  {item.message}
                </Text>
              </LinearGradient>
              <Text style={styles.time}>
                {moment(item.createdAt, 'YYY-MM-DD hh:mm:ss').format('hh:mm A')}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  const onSendMessage = async () => {
    if (msg) {
      let result = await general.Chat.sendMess(room_id, msg);
      if (result.data.status === 1) {
        setMsg(null);
        setListMessages((oldData) => [result.data.data, ...oldData]);
        if (refContainer.current) {
          refContainer.current.scrollToIndex({
            index: 0,
            viewOffset: 0,
            viewPosition: 1,
            animated: true,
          });
        }
      }
    } else {
      Toast.show('Chưa nhập nội dung chat');
    }
  };

  const scrollToTop = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.8],
    extrapolate: 'clamp',
  });
  const titleTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  return (
    <View style={{flex: 1}}>
      <Header left="back" title={name} right="search" />
      <View style={{flex: 1, position: 'relative'}}>
        <View
          style={{
            flex: 1,
            paddingHorizontal: 15,
            backgroundColor: '#fff',
            marginTop: HEADER_MAX_HEIGHT,
          }}>
          <Animated.FlatList
            ref={refContainer}
            scrollEventThrottle={1}
            style={{
              flex: 1,
              paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
            }}
            inverted
            data={data}
            renderItem={ChatDetail}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            onEndReached={onLoadMore}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            onScrollToTop={scrollToTop}
            contentInset={{
              top: HEADER_MAX_HEIGHT,
            }}
            contentOffset={{
              y: -HEADER_MAX_HEIGHT,
            }}
          />
        </View>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            {
              transform: [{translateY: headerTranslate}],
              height: 100,
              backgroundColor: 'red',
            },
          ]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                // opacity: imageOpacity,
                height: HEADER_MAX_HEIGHT,
                transform: [{translateY: imageTranslate}],
              },
            ]}
            source={Images.ic_avatar1}
          />
          <Animated.View
            style={[
              styles.bar,
              {
                opacity: imageOpacity,
                transform: [{scale: titleScale}, {translateY: titleTranslate}],
              },
            ]}>
            <Animated.Text style={styles.title}>Title</Animated.Text>
          </Animated.View>
        </Animated.View>
        <View style={styles.sendMess}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setMsg(text)}
            placeholder="Your message..."
            value={msg}
          />
          <TouchableOpacity style={styles.btnSend} onPress={onSendMessage}>
            <LinearGradient
              colors={['#da0845', '#e52b36', '#eb3f2d']}
              style={styles.send}>
              <Image source={Images.ic_send} style={styles.ic_send} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default Chat;
