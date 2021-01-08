/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, RefreshControl, FlatList} from 'react-native';
import styles from './styles';
import {Header} from '@components/index';
import {Images} from '@config/index';
import {getHeight} from '@common/index';
import LinearGradient from 'react-native-linear-gradient';

const DATA = [];
export default function Account({navigation}) {
  useEffect(() => {
    // Get the device token
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#d90646', '#e22539', '#eb402c']}
        style={styles.container}>
        <Header left="edit" right="info" leftStyle={{color: '#fff'}} />
      </LinearGradient>
    </View>
  );
}
