import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';
import {Platform} from 'react-native';

class NotificationManager {
  configure = () => {
    PushNotification.configure({
      onRegister: function (token) {
        // console.log('[NotificationManager] on register TOKEN:', token);
      },
      onNotification: function (notification) {
        // console.log(
        //   '[NotificationManager] on notification NOTIFICATION:',
        //   notification,
        // );
        notification.finish(PushNotificationIOS.FetchResult.NoData);
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
  };

  _buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_launcher',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate || false,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high',
      data: data,
    };
  };

  _buildIOSNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id: id,
        item: data,
      },
    };
  };

  showNotification = (id, title, message, data = {}, options = {}) => {
    PushNotification.localNotification({
      // Android Only Properties
      ...this._buildAndroidNotification(id, title, message, data, options),
      // IOS Only Properties
      ...this._buildIOSNotification(id, title, message, data, options),

      // IOS and Android properties
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      userInteraction: false, // If the notification was opened by the use from notification area or ...
    });
  };

  cancelAllLocalNotification = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  unregister = () => {
    PushNotification.unregister;
  };
}

export const notificationManager = new NotificationManager();
