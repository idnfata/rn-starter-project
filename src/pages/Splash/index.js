import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Container} from '../../components';
import {getUserToken} from '../../services';
import {colors} from '../../utils';

const Splash = ({navigation}) => {
  // console.log(props);
  useEffect(() => {
    getUserToken()
      .then(token => {
        // console.log(token);
        if (!token) {
          setTimeout(() => {
            navigation.replace('WelcomeAuth');
          }, 1000);
        }
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator color={colors.default} size="large" />
    </View>
  );
};

export default Splash;
