import React from 'react';
import {Image, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Container} from '../../components';
import {colors} from '../../utils';
import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <Container>
      <View style={styles.wrapper.page}>
        <Image source={Logo} style={styles.wrapper.logo} />
        <Text style={styles.text.welcome}>Selamat Datang di NamaAPP</Text>
        <ActionButton
          desc="Silahkan masuk, jika Anda sudah memiliki akun"
          title="Masuk"
          onPress={() => handleGoTo('Login')}
        />
        <ActionButton
          desc="atau silahkan daftar jika Anda belum memiliki akun"
          title="Daftar"
          onPress={() => handleGoTo('Register')}
        />
      </View>
    </Container>
  );
};

const styles = {
  wrapper: {
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },
    logo: {
      width: 219,
      height: 137,
      marginTop: 25,
      marginBottom: 10,
      resizeMode: 'contain',
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;
