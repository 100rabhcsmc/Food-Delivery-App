import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {Normalize} from '../../constant';

const Welcome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/Welcome.png')}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate('Auth')}
          style={{
            backgroundColor: 'white',
            padding: Normalize(22),
            marginHorizontal: Normalize(32),
            borderRadius: Normalize(40),
            marginTop: '190%',
          }}>
          <Text
            style={{
              color: '#FA4A0C',
              textAlign: 'center',
              fontWeight: '500',
            }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
