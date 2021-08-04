import React, {useEffect, useState} from 'react';
import {Alert, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IconBack, IllustrationLogin} from '../../assets';
import {Button, Container, Input} from '../../components';
import {loginUser, setForm} from '../../services';
import {colors} from '../../utils';
import * as Animatable from 'react-native-animatable';
import {userLogin} from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  //memanggil/menggunakan state dari reducer redux
  const {GlobalReducer, LoginReducer} = useSelector(reducer => reducer);
  const {formData} = LoginReducer;
  const dispatch = useDispatch(); //untuk merubah state di reducer

  const [validation, setValidation] = useState({
    email: true,
    password: true,
  });
  // const handleValidUser = val => {
  //   if (val.trim().length >= 4) {
  //     setValidation({
  //       ...validation,
  //       username: true,
  //     });
  //   } else {
  //     setValidation({
  //       ...validation,
  //       username: false,
  //     });
  //   }
  // };
  // ini untuk menggunakan state lokal
  // const [data, setData] = useState({
  //   fullName: 'Fata',
  //   email: '',
  //   password: '',
  // });

  const handleChange = (forField, value) => {
    // setData({
    //   ...data,
    //   [input]: value,
    // });

    dispatch(setForm(forField, value));
    //validation
    if (forField === 'email') {
      if (value.trim().length >= 4) {
        setValidation({
          ...validation,
          email: true,
        });
      } else {
        setValidation({
          ...validation,
          email: false,
        });
      }
    }

    if (forField === 'password') {
      if (value.trim().length >= 6) {
        setValidation({
          ...validation,
          password: true,
        });
      } else {
        setValidation({
          ...validation,
          password: false,
        });
      }
    }
  };

  const handleSubmit = async () => {
    // console.log('data yang disubmit:', formData);
    // dispatch(loginUser(formData));
    const res = await dispatch(loginUser(formData)).catch(err => err);

    if (res) {
      // history.go(0);
      navigation.navigate('Splash');
    } else {
      Alert.alert('Login Gagal', GlobalReducer.message);
    }

    //di .then responsenya API Login, dispatch setUser globalState
  };

  return (
    <Container>
      <View style={styles.wrapper.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <IconBack width="25" height="25" fill={colors.default} />
          </TouchableOpacity>
          <IllustrationLogin
            width={156}
            height={115}
            style={styles.illustration}
          />

          <Text style={styles.text.desc}>
            Masukkan email dan password Anda, untuk masuk ke aplikasi namaAPP.
          </Text>
          <View style={styles.space(64)} />
          <Input
            placeholder="Email"
            value={formData.email}
            onChangeText={value => handleChange('email', value)}
          />
          {validation.email ? null : (
            <Animatable.View animation="fadeInLeft" duration={300}>
              <Text style={styles.errorMsg}>
                Email must be 4 character long.
              </Text>
            </Animatable.View>
          )}

          <View style={styles.space(33)} />
          <Input
            placeholder="Password"
            value={formData.password}
            secureTextEntry={true}
            onChangeText={value => handleChange('password', value)}
          />
          {validation.password ? null : (
            <Animatable.View animation="fadeInLeft" duration={300}>
              <Text style={styles.errorMsg}>
                Password must be 6 character long.
              </Text>
            </Animatable.View>
          )}
          <View style={styles.space(83)} />
          <Button title="Masuk" onPress={() => handleSubmit()} />
        </ScrollView>
      </View>
    </Container>
  );
};

export default Login;

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  illustration: {
    marginTop: 10,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
};
