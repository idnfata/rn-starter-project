import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const OvertimeHistoriesScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>OvertimeHistoriesScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OvertimeHistoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
