import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Normalize} from '../../constant';

const Header = ({setOpen}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF', borderRadius: 20}}>
      <View
        style={{
          flex: 1,
          marginTop: '30%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../assets/Logo.png')}
        />
      </View>
      <View
        style={{
          flex: 0.4,
          marginTop: '20%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: Normalize(74),
        }}>
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Text style={{fontWeight: '600'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setOpen(false)}>
          <Text style={{fontWeight: '600'}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
