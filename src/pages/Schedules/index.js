import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SchedulesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>SchedulesScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SchedulesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
