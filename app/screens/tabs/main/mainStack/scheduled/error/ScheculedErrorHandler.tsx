import { View, Text } from 'react-native'
import React from 'react'

type Props = {
  message: string
}

export default function ScheculedErrorHandler({ message }: Props) {
  return (
    <View>
      <Text>{ message }</Text>
    </View>
  )
}