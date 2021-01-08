import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {getHeight, getWidth, hasNotch} from '@common/index';
import LinearGradient from 'react-native-linear-gradient';

export default function TabBar({
  state,
  descriptors,
  navigation,
  activeTintColor,
  inactiveTintColor,
}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tab}>
            {options.tabBarIcon({
              color: isFocused ? activeTintColor : inactiveTintColor,
            })}
            {index === 2 && (
              <LinearGradient
                colors={['#d90646', '#e22539', '#eb402c']}
                style={styles.circle}
              />
            )}
            {isFocused ? <View style={styles.activeIndicator} /> : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
    paddingHorizontal: getWidth(11),
    paddingBottom: hasNotch() ? getHeight(27) : 0,
    position: 'relative',
  },
  tab: {
    minWidth: getWidth(60),
    alignItems: 'center',
    position: 'relative',
    paddingTop: getHeight(10),
    paddingBottom: getHeight(10),
  },
  activeIndicator: {
    position: 'absolute',
    backgroundColor: '#da0a45',
    height: getHeight(2),
    width: '100%',
    bottom: 0,
  },
  circle: {
    width: getHeight(60),
    height: getHeight(60),
    borderRadius: getHeight(30),
    position: 'absolute',
    top: getHeight(-25),
    zIndex: -1,
  },
});
