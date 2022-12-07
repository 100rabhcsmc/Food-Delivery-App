import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Login from './login';
import Header from './header';

const Auth = ({navigation}) => {
  const [open, setOpen] = useState(true);

  return (
    <View style={{flex: 1, backgroundColor: '#F2F2F2'}}>
      <Header setOpen={setOpen} />
      <View style={{flexDirection: 'row'}}>
        {open ? (
          <View style={[styles.underline, {marginStart: '15%'}]} />
        ) : (
          <View style={[styles.underline, {marginStart: '60%'}]} />
        )}
      </View>
      <View style={{flex: 1.9}}>
        {open ? (
          <Login navigation={navigation} />
        ) : (
          <Text style={{textAlign: 'center', marginTop: '50%'}}>
            Comming Soon
          </Text>
        )}
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  underline: {
    height: 2,
    width: '25%',
    backgroundColor: 'red',
  },
});
