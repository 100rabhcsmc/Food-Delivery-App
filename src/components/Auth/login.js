import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LoginInput from '../Common/LoginInput';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, marginHorizontal: 50}}>
      <LoginInput title="Email address" />
      <LoginInput title="Password" />
      <Text
        style={{
          color: '#FA4A0C',
          fontSize: 15,
          marginTop: 20,
          fontWeight: '500',
          marginStart: 10,
        }}>
        Forgot Passcode ?{' '}
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('RootNavigation')}
        activeOpacity={1}
        style={{
          backgroundColor: '#FA4A0C',
          padding: 20,
          marginHorizontal: 0,
          borderRadius: 40,
          marginTop: '34%',
        }}>
        <Text
          style={{
            color: '#FFFFFF',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 20,
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
