import {GoogleSignin, statusCodes} from 'react-native-google-signin';
import auth from '@react-native-firebase/auth';
import {AccessToken, LoginManager} from 'react-native-fbsdk';

export const _signInGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    const credential = auth.GoogleAuthProvider.credential(idToken, accessToken);

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

export const _signInFacebook = () => {
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

export const _signOutGoogle = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    auth()
      .signOut()
      .then(() => console.log('Your are signed out!'));
  } catch (error) {
    console.error(error);
  }
};

export const _signOutFacebook = () => {
  LoginManager.logOut();
};
