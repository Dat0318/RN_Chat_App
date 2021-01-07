import React, {Component} from 'react';
import {Image} from 'react-native';
import {Style, isViewIntro} from '@common/index';
import {Images} from '@config';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Login, Home, Chat, Reset} from '@screens/index';
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
      activeTintColor: '#48d2ff',
      inactiveTintColor: '#fff',
    }}>
    <TabStack.Screen
      name={'Home'}
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_home}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
    <TabStack.Screen
      name={'Chat'}
      component={Chat}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_hat}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
    {/* <TabStack.Screen
      name={'Contact'}
      component={Login}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_ic_info}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    />
    <TabStack.Screen
      name={'Profile'}
      component={Login}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            source={Images.ic_profile}
            style={[Style.iconTabBottom, {tintColor: color}]}
          />
        ),
      }}
    /> */}
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
          <Stack.Screen name={'Reset'} component={Reset} />
          <Stack.Screen name={'MainStack'} component={MainStackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default RootStack;
