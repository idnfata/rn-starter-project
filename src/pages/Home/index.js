import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Container} from '../../components';

const Home = ({navigation}) => {
  return (
    <Container>
      <Text>Home</Text>
      {/* <TouchableOpacity
        onPress={() => navigation.push('Settings', {name: 'Setting tes'})}> */}
      {/* gunakan navigation.push apabila dalam satu stack, apabila tidak, gunakan navigate */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Settings', {
            params: {name: 'Setting tes'},
          })
        }>
        <Text>Settings</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
