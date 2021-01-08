/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, Text, ScrollView, Switch} from 'react-native';
import styles from './styles';
import {Header} from '@components/index';
import {Images} from '@config/index';
import {getHeight} from '@common/index';
import LinearGradient from 'react-native-linear-gradient';

export default function Account() {
  const [isEnabled, setIsEnabled] = useState(true);

  return (
    <ScrollView style={styles.scroll}>
      <LinearGradient
        colors={['#d90646', '#e22539', '#eb402c']}
        style={styles.container}>
        <Header left="edit" right="logout" leftStyle={{color: '#fff'}} />
        <View style={styles.header}>
          <View style={styles.headerAvatar}>
            <Image style={styles.headerImage} source={Images.ic_avatar2} />
          </View>
          <Text style={styles.headerName}>Dat TD</Text>
          <Text style={styles.headerDesc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit . Ut enim
            ad minim veniam.
          </Text>
        </View>
      </LinearGradient>
      <View style={styles.body}>
        <View style={styles.item}>
          <Text style={styles.itemName}>Email address</Text>
          <Text style={styles.itemVale}>dadtd0319@gmail.com</Text>
          <Image style={styles.itemIcon} source={Images.ic_arrow_right} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemName}>Telephone</Text>
          <Text style={styles.itemVale}>00 222 333 444</Text>
          <Image style={styles.itemIcon} source={Images.ic_arrow_right} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemName}>Notifications</Text>
          <Switch
            trackColor={{false: '#bfbbbb', true: '#da0945'}}
            thumbColor={'#fff'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => {
              setIsEnabled(!isEnabled);
            }}
            value={isEnabled}
          />
          <Image style={styles.itemIcon} source={Images.ic_arrow_right} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemName}>Setting</Text>
          <Image style={styles.itemIcon} source={Images.ic_arrow_right} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemName}>Feedback</Text>
          <Image style={styles.itemIcon} source={Images.ic_arrow_right} />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemName}>Get help</Text>
          <Image style={styles.itemIcon} source={Images.ic_arrow_right} />
        </View>
        <View style={styles.item}>
          <Text style={[styles.itemName, styles.itemNameActive]}>
            Delete account
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
