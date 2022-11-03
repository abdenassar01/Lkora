import {View, Text} from 'react-native';
import React from 'react';

export default function Fixtures() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF2782',
      }}>
      <Text style={{color: '#fff'}}>
        This will be available in the next release 🌲
      </Text>
    </View>
  );
}
