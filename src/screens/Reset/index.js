/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk';

export default function Reset({navigation}) {
  // const navigation = useNavigation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '22722611146-s1h4psjhq1nm7ee2hr3k4j7q6e5ntsm4.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('UserInfo: ', userInfo);
      const {accessToken, idToken} = await GoogleSignin.signIn();
      console.log('Login success');
      console.log('accessToken: ', accessToken, 'idToken: ', idToken);
      setLoggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );

      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const _signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => console.log('Your are signed out!'));
      setLoggedIn(false);
      setUserInfo([]);
    } catch (error) {
      console.error(error);
    }
  };

  const _signInFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then((data) => {
            console.log('Data: ', data.accessToken.toString());
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const _signOutFacebook = () => {
    LoginManager.logOut();
  };

  return (
    <View style={{backgroundColor: 'lightblue', flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity
          onPress={_signInFacebook}
          style={{margin: 20, padding: 10, backgroundColor: 'yellow'}}>
          <Text>content</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_signOutFacebook}
          style={{margin: 20, padding: 10, backgroundColor: 'yellow'}}>
          <Text>Logout</Text>
        </TouchableOpacity>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={_signIn}
              />
            </View>
            <View style={styles.buttonContainer}>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button onPress={_signOut} title="LogOut" color="red" />
              )}
            </View>

            <View>
              <LoginButton
                onLoginFinished={(error, result) => {
                  if (error) {
                    // console.log('login has error: ' + result.error);
                  } else if (result.isCancelled) {
                    // console.log('login is cancelled.');
                  } else {
                    AccessToken.getCurrentAccessToken().then((data) => {
                      // console.log(data.accessToken.toString());
                    });
                  }
                }}
                publishPermissions={['email']}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
