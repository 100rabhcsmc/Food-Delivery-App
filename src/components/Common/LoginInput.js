import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Normalize} from '../../constant';

const LoginInput = ({title}) => {
  return (
    <View style={{marginTop: '20%'}}>
      <Text style={{marginStart: Normalize(10), color: 'gray'}}>{title}</Text>
      <TextInput
        style={{
          height: Normalize(36),
          margin: Normalize(12),
          borderBottomWidth: 0.4,
          padding: Normalize(10),
        }}
        // onChangeText={onChangeText}
        // value={text}
      />
    </View>
  );
};

export default LoginInput;

const styles = StyleSheet.create({});
