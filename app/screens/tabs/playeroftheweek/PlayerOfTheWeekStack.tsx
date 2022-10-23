import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

export default function PlayerOfTheWeekStack() {

  const Stack = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <Text>PlayerOfTheWeekStack</Text>
    </View>
  )
}