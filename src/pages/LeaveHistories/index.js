import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const LeaveHistoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LeaveHistoriesScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LeaveHistoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
