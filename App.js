/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {AppState} from 'react-native';
import Router from '@navigator';
import {_signOutFacebook, _signInGoogle} from '@common/index';
import {LoginStatus} from '@stores/index';

const App = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const status = AppState.addEventListener('change', _handleAppStateChange);

    return status;
  }, []);

  const _handleAppStateChange = async (nextAppState) => {
    console.log('nextAppState', nextAppState);
    if (nextAppState === 'active') {
      console.log('in app');
    } else {
      console.log('out app');
      await _signOutFacebook();
      await _signInGoogle();
      // await LoginStatus.changeStatus(false);
    }
    setAppState(nextAppState);
  };

  return (
    <>
      <Router />
    </>
  );
};

export default App;
