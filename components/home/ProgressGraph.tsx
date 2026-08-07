import { View, Text } from 'react-native'
import React from 'react'

export default function ProgressGraph() {
  return (
    <View className="flex-row bg-textLight h-[80px] w-[80px] rounded-full items-center shadow-sm border-[8px] border-gray-200">
      <Text className="font-title text-3xl text-gray-400 w-full text-center">0%</Text>
    </View>
  )
}