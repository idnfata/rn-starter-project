import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RequestsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>RequestsScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RequestsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
