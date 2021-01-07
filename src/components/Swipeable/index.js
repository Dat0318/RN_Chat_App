import React, {Component} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  I18nManager,
  Image,
} from 'react-native';

import {RectButton} from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

import {Images} from '@config/index';

import LinearGradient from 'react-native-linear-gradient';

export default class AppleStyleSwipeableRow extends Component {
  renderLeftActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Archive
        </Animated.Text>
      </RectButton>
    );
  };
  renderRightAction = (text, color, x, progress, image, textColor = '#fff') => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      this.close();
      alert(text);
    };
    return (
      <Animated.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton
          style={[styles.rightAction, {backgroundColor: color}]}
          onPress={pressHandler}>
          <Image
            source={image}
            style={{width: 15, height: 17, resizeMode: 'contain'}}
          />
          <Text style={[styles.actionText, {color: textColor}]}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };
  renderRightActions = (progress) => (
    <View
      style={{
        width: 150,
        flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
      }}>
      {this.renderRightAction(
        'More',
        '#e6e6e6',
        192,
        progress,
        Images.ic_dots,
        '#000',
      )}
      {this.renderRightAction(
        'Delete',
        '#e93a2f',
        128,
        progress,
        Images.ic_delete,
      )}
    </View>
  );
  updateRef = (ref) => {
    this._swipeableRow = ref;
  };
  close = () => {
    this._swipeableRow.close();
  };
  render() {
    const {children} = this.props;
    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        // renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        {children}
      </Swipeable>
    );
  }
}

const styles = StyleSheet.create({
  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 13,
    backgroundColor: 'transparent',
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
