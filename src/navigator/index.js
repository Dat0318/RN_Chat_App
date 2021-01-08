/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image} from 'react-native';
import {Style, getHeight} from '@common/index';
import {Images} from '@config/index';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  Login,
  Home,
  Chat,
  Reset,
  Account,
  Contacts,
  Groups,
  Booking,
} from '@screens/index';
import TabBar from './TabBar';
import {observer} from 'mobx-react';
import {LoginStatus} from '@stores/index';

const TabStack = createMaterialTopTabNavigator();
const TabStackScreen = () => (
  <TabStack.Navigator
    tabBar={(props) => <TabBar {...props} />}
    initialRouteName={'Home'}
    swipeEnabled={true}
    lazy={true}
    tabBarPosition={'bottom'}
    tabBarOptions={{
      activeTintColor: '#de2961',
      inactiveTintColor: '#b9b9b9',
    }}>
    <TabStack.Screen
      name={'Home'}
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_chat}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
    <TabStack.Screen
      name={'Groups'}
      component={Groups}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_people}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
    <TabStack.Screen
      name={'Booking'}
      component={Booking}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_plus}
            style={[
              Style.iconTabBottom,
              {
                width: getHeight(18),
                height: getHeight(18),
                position: 'absolute',
                top: getHeight(-5),
              },
            ]}
          />
        ),
      }}
    />
    <TabStack.Screen
      name={'Contacts'}
      component={Contacts}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_menu}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
    <TabStack.Screen
      name={'Profile'}
      component={Account}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_person}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
  </TabStack.Navigator>
);
const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator headerMode={'none'}>
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator initialRouteName={'TabStackScreen'} headerMode={'none'}>
    <Stack.Screen name={'TabStackScreen'} component={TabStackScreen} />
    <MainStack.Screen name={'Home'} component={Home} />
    <MainStack.Screen name={'Chat'} component={Chat} />
  </MainStack.Navigator>
);

const Stack = createStackNavigator();
@observer
class RootStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          {/* <Stack.Screen name={'Reset'} component={Reset} /> */}
          {LoginStatus.status === false ? (
            <Stack.Screen
              name={'AuthStackScreen'}
              component={AuthStackScreen}
            />
          ) : (
            <Stack.Screen
              name={'MainStackScreen'}
              component={MainStackScreen}
            />
          )}
          <Stack.Screen name={'MainStack'} component={MainStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default RootStack;
