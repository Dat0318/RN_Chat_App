/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {InputCustom} from '@components/index';
import {LoginStatus} from '@stores/index';
import {_signInGoogle, _signInFacebook, Images} from '@common/index';

export default function Login({navigation}) {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassWord] = React.useState('');
  const [rePassword, onChangeRePassWord] = React.useState('');
  const [statusLogin, setStatusLogin] = React.useState(true);

  useEffect(() => {
    if (statusLogin) {
      onChangeEmail('johndoe@symu.co');
      onChangePassWord('123456');
    } else {
      onChangeEmail('');
      onChangePassWord('');
    }
  }, [statusLogin]);

  const submit = () => {
    if (email !== '' && password !== '') {
      LoginStatus.changeStatus(true);
    } else {
      onChangeEmail('');
      onChangePassWord('');
      onChangeRePassWord('');
    }
  };

  const loginSocial = async (val) => {
    if (val === 'fb') {
      await _signInFacebook();
      await LoginStatus.changeStatus(true);
    } else if (val === 'gg') {
      await _signInGoogle(() => {
        console.log(123);
      });
      await LoginStatus.changeStatus(true);
    }
  };

  return (
    <LinearGradient
      colors={['#d90646', '#e22539', '#eb402c']}
      style={styles.linearGradient}>
      <View style={styles.ViewScreen}>
        <Text style={styles.appName}>HeyU</Text>
        <Text style={styles.intro}>Free chat app template</Text>
        <InputCustom
          placeholder={'UserName'}
          styleGroup={styles.ViewInput}
          styleInput={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
        <InputCustom
          placeholder={'PassWord'}
          styleGroup={styles.ViewInput}
          styleInput={styles.input}
          onChangeText={(text) => onChangePassWord(text)}
          value={password}
          secureTextEntry
        />
        {!statusLogin && (
          <InputCustom
            placeholder={'Re PassWord'}
            styleGroup={styles.ViewInput}
            styleInput={styles.input}
            onChangeText={(text) => onChangeRePassWord(text)}
            value={rePassword}
            secureTextEntry
          />
        )}
        <TouchableOpacity style={styles.btn} onPress={submit}>
          <Text style={styles.textSignUp}>
            {statusLogin ? 'Login' : 'Sign Up'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setStatusLogin(!statusLogin);
          }}>
          <Text style={styles.textSignIn}>
            Already have an account? {statusLogin ? 'Sign up' : 'Sign in'}
          </Text>
        </TouchableOpacity>
        {statusLogin && (
          <View style={styles.socialGroups}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={() => loginSocial('fb')}>
              <Image style={styles.socialIcon} source={Images.ic_facebook} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.socialBtn,
                {marginRight: 0, backgroundColor: '#fff'},
              ]}
              onPress={() => loginSocial('gg')}>
              <Image style={styles.socialIcon} source={Images.ic_google} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
}
