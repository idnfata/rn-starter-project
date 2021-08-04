import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AttendancesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>AttendancesScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttendancesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
