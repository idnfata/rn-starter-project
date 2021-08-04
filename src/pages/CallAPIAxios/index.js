import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {Button, Input} from '../../components';

const Item = ({id, name, email, bidang, onPress, onDelete}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://picsum.photos/200/300?random=${id}`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descBidang}>{bidang}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const CallAPIAxios = () => {
  // ini untuk menggunakan state lokal
  const [data, setData] = useState({
    name: 'Fata',
    email: '',
    bidang: '',
  });

  const [button, setButton] = useState('Simpan');
  const [selectedUser, setSelectedUser] = useState({});

  const selectItem = item => {
    // console.log(item);
    setSelectedUser(item);
    setData({
      name: item.name,
      email: item.email,
      bidang: item.bidang,
    });
    setButton('Update');
  };

  const deleteItem = item => {
    axios.delete(`http://10.0.2.2:3000/users/${item.id}`).then(res => {
      console.log('res delete :', res);
      getData();
    });
  };
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   console.log(formData);
  // }, []);

  const handleChange = (forField, value) => {
    setData({
      ...data,
      [forField]: value,
    });
  };

  const handleSubmit = () => {
    // console.log('data yang disubmit:', data);
    if (button === 'Simpan') {
      axios.post('http://10.0.2.2:3000/users', data).then(res => {
        console.log(res);
        setData({
          name: '',
          email: '',
          bidang: '',
        });
        getData();
      });
    } else if (button === 'Update') {
      axios
        .put(`http://10.0.2.2:3000/users/${selectedUser.id}`, data)
        .then(res => {
          // console.log(res);
          setData({
            name: '',
            email: '',
            bidang: '',
          });
          setButton('Simpan');
          getData();
        });
    }
  };

  const getData = () => {
    axios
      .get('http://10.0.2.2:3000/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    //   {dataUser.length > 0 &&}
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.textTitle}>CRUD dengan Axios</Text>
        <Text>Masukkan Anggota Kabayan Coding</Text>
        <View style={styles.space(24)} />

        <Input
          placeholder="Nama Lengkap"
          value={data.name}
          onChangeText={value => handleChange('name', value)}
        />
        <View style={styles.space(33)} />

        <Input
          placeholder="Email"
          value={data.email}
          onChangeText={value => handleChange('email', value)}
        />
        <View style={styles.space(33)} />

        <Input
          placeholder="Bidang"
          value={data.bidang}
          onChangeText={value => handleChange('bidang', value)}
        />
        <View style={styles.space(33)} />

        <Button title={button} onPress={handleSubmit} />
        <View style={styles.line} />
        {users.map(user => {
          return (
            <Item
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              bidang={user.bidang}
              onPress={() => selectItem(user)}
              onDelete={() =>
                Alert.alert(
                  'Peringatan',
                  'Anda yakin ingin menghapus user ini?',
                  [
                    {text: 'Tidak', onPress: () => console.log('button tidak')},
                    {text: 'Ya', onPress: () => deleteItem(user)},
                  ],
                )
              }
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {heigcht: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 90, height: 90, borderRadius: 90},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  desc: {marginLeft: 18, flex: 1},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descBidang: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
  space: value => {
    return {
      height: value,
    };
  },
};

export default CallAPIAxios;
