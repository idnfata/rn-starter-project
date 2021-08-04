import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IconBack, IllustrationRegister} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../services';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  //memanggil/menggunakan state dari reducer redux
  const {formData} = useSelector(reducer => reducer.RegisterReducer);
  const dispatch = useDispatch(); //untuk merubah state di reducer

  // ini untuk menggunakan state lokal
  // const [data, setData] = useState({
  //   fullName: 'Fata',
  //   email: '',
  //   password: '',
  // });

  // useEffect(() => {
  //   console.log(formData);
  // }, []);

  const handleChange = (forField, value) => {
    // setData({
    //   ...data,
    //   [input]: value,
    // });
    dispatch(setForm(forField, value));
  };

  const handleSubmit = () => {
    console.log('data yang disubmit:', formData);
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack width="25" height="25" fill={colors.default} />
        </TouchableOpacity>
        <IllustrationRegister
          width={156}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk proses daftar Anda
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Nama Lengkap"
          value={formData.fullName}
          onChangeText={value => handleChange('fullName', value)}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={formData.email}
          onChangeText={value => handleChange('email', value)}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={formData.password}
          secureTextEntry={true}
          onChangeText={value => handleChange('password', value)}
        />
        <View style={styles.space(83)} />
        <Button title="Daftar" onPress={() => handleSubmit()} />
      </ScrollView>
    </View>
  );
};

export default Register;

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
};
