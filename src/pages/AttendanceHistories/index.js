import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const AttendanceHistoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>AttendanceHistoriesScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttendanceHistoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
