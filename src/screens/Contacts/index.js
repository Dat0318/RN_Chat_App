/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import styles from './styles';
import {Header} from '@components/index';
import {Images} from '@config/index';
import {getHeight} from '@common/index';

const DATA = {
  online: [
    {
      id: 1,
      name: 'Oswald Cobblepot',
      avatar: Images.ic_avatar1,
    },
    {
      id: 2,
      name: 'Fish Mooney',
      avatar: Images.ic_avatar2,
    },
    {
      id: 3,
      name: 'Bruce Wayne',
      avatar: Images.ic_avatar3,
    },
    {
      id: 4,
      name: 'Barbara Kean',
      avatar: Images.ic_avatar4,
    },
    {
      id: 5,
      name: 'Edward Nygma',
      avatar: Images.ic_avatar5,
    },
  ],
  offline: [
    {
      id: 1,
      name: 'Selina Kyle',
      avatar: Images.ic_avatar3,
    },
    {
      id: 2,
      name: 'Harvey Bullock',
      avatar: Images.ic_avatar4,
    },
    {
      id: 3,
      name: 'Jim Gordon',
      avatar: Images.ic_avatar5,
    },
    {
      id: 4,
      name: 'Bruce Wayne',
      avatar: Images.ic_avatar3,
    },
    {
      id: 5,
      name: 'Barbara Kean',
      avatar: Images.ic_avatar4,
    },
    {
      id: 6,
      name: 'Harvey Bullock',
      avatar: Images.ic_avatar4,
    },
    {
      id: 7,
      name: 'Jim Gordon',
      avatar: Images.ic_avatar5,
    },
    {
      id: 8,
      name: 'Bruce Wayne',
      avatar: Images.ic_avatar3,
    },
  ],
};
export default function Groups() {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(DATA);
  }, []);

  return (
    <View style={styles.container}>
      <Header left="edit" title="Contacts" right="add" />
      <View style={styles.search}>
        <View style={styles.searchBox}>
          <Image style={styles.searchIcon} source={Images.ic_search} />
          <Text style={styles.searchText}>Search friends</Text>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.title}>
          <Text style={styles.titleText}>
            Online (
            <Text style={styles.titleTextRed}>{data?.online?.length}</Text>)
          </Text>
        </View>
        {data?.online?.map((element, index) => {
          return (
            <View style={styles.item} key={index}>
              <View style={styles.itemAvatar}>
                <Image style={styles.moreImage} source={element.avatar} />
                <View style={styles.itemDots} />
              </View>
              <Text style={styles.itemName}>{element.name}</Text>
              <View style={styles.itemGroupBtn}>
                <TouchableOpacity
                  style={styles.itemBtn}
                  onPress={() => {
                    console.log('Click view more');
                  }}>
                  <Image style={styles.itemIcon} source={Images.ic_info} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.itemBtn, {marginRight: 0}]}
                  onPress={() => {
                    console.log('Click view more');
                  }}>
                  <Image
                    style={[styles.itemIcon, {width: getHeight(23)}]}
                    source={Images.ic_chat}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
        <View style={styles.title}>
          <Text style={styles.titleText}>Others</Text>
        </View>
        {data?.offline?.map((element, index) => {
          return (
            <View style={styles.item} key={index}>
              <View style={styles.itemAvatar}>
                <Image style={styles.moreImage} source={element.avatar} />
                <View style={styles.itemDots} />
              </View>
              <Text style={styles.itemName}>{element.name}</Text>
              <View style={styles.itemGroupBtn}>
                <TouchableOpacity
                  style={styles.itemBtn}
                  onPress={() => {
                    console.log('Click view more');
                  }}>
                  <Image style={styles.itemIcon} source={Images.ic_info} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.itemBtn, {marginRight: 0}]}
                  onPress={() => {
                    console.log('Click view more');
                  }}>
                  <Image
                    style={[styles.itemIcon, {width: getHeight(23)}]}
                    source={Images.ic_chat}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
