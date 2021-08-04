import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../../components';
import {colors} from '../../utils';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {marginBottom: 43, maxWidth: 225},
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.default,
      paddingHorizontal: '15%',
      marginBottom: 6,
      textAlign: 'center',
    },
  },
};

export default ActionButton;
