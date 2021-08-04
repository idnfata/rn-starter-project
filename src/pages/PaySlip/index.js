import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const PaySlipScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>PaySlipScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaySlipScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
