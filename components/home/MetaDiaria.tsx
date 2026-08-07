import { View, Text } from 'react-native'
import React from 'react'
import ProgressGraph from './ProgressGraph'

export default function MetaDiaria() {
  return (
    <View className="flex-row justify-around bg-textLight h-[150px] w-[90%] mx-auto mt-10 rounded-2xl items-center shadow-sm">
      <View className="items-right justify-center w-[50%]">
        <Text className="text-xl font-titleMedium">Meta diária</Text>

        <View className="flex-row items-center">
          <Text className="text-md font-body text-gray-500"> - / - </Text>
          <Text className="text-lg font-body text-gray-500"> minutos</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-md font-body text-gray-500"> - / - </Text>
          <Text className="text-lg font-body text-gray-500"> páginas</Text>
        </View>
      </View>

      {/* grafico que mostra o progresso em % */}
      <View className=''>
        <ProgressGraph/>
      </View>
    </View>
  )
}