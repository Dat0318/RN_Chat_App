/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image, StatusBar} from 'react-native';
import styles from './styles';
import {Images} from '@config/index';
import {useNavigation} from '@react-navigation/native';

export class Header extends Component {
  onLeftPress = () => {
    if (this.props.left === 'back') {
      this.props.navigation.goBack();
    } else {
      typeof this.props.onLeftPress !== 'undefined' && this.props.onLeftPress();
    }
  };

  onRightPress = () => {
    typeof this.props.onRightPress !== 'undefined' && this.props.onRightPress();
  };

  renderLeft = () => {
    if (typeof this.props.left !== 'undefined' && this.props.left === 'edit') {
      return <Text style={[styles.edit, this.props.leftStyle]}>Edit</Text>;
    } else if (this.props.left === 'back') {
      return <Image style={styles.icon} source={Images.ic_info} />;
    } else if (this.props.left === 'search') {
      return <Image style={styles.icon} source={Images.ic_delete} />;
    }
    return null;
  };

  renderRight = () => {
    if (this.props.right === 'search') {
      return <Image style={styles.icon} source={Images.ic_delete} />;
    } else if (this.props.right === 'add') {
      return <Image style={styles.icon} source={Images.ic_plus} />;
    } else if (this.props.right === 'info') {
      return <Image style={styles.icon} source={Images.ic_info} />;
    } else if (this.props.right === 'logout') {
      return (
        <Image
          style={[styles.icon, {tintColor: '#fff'}]}
          source={Images.ic_logout}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <View
        style={[
          styles.header,
          this.props.leftStyle !== undefined && {borderBottomWidth: 0},
        ]}>
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
        <View style={styles.left}>
          <TouchableOpacity onPress={() => this.onLeftPress()}>
            {this.renderLeft()}
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          {this.props.showTitleSmall && (
            <Text style={styles.titleSmall}>{this.props.titleSmall}</Text>
          )}
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={() => this.onRightPress()}>
            {this.renderRight()}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default function (props) {
  const navigation = useNavigation();
  return <Header {...props} navigation={navigation} />;
}
