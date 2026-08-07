import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ProgressGraph from './ProgressGraph'

export default function UltimaSessao() {
  return (
    <View className="flex-row justify-around bg-textLight h-[150px] w-[90%] mx-auto mt-10 rounded-2xl items-center shadow-sm">
      <View className="items-right justify-center w-[50%]">
        <Text className="text-xl font-titleMedium">Ultima Sessão</Text>

        <Text className="text-gray-500 mb-2">Realizada há 0 dias</Text>

        <View className="flex-row items-center">
          <Text className="text-lg font-body text-gray-500"> -- </Text>
          <Text className="text-md font-body text-gray-500"> horas</Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-lg font-body text-gray-500"> -- </Text>
          <Text className="text-md font-body text-gray-500"> páginas</Text>
        </View>
      </View>

      <View className='items-center'>
        <View className="w-[90px] items-center">
          <Image
            source={require("../../assets/images/books.png")}
            style={{
              width: 80,
              height: 80
            }}
          />

          <Image
            source={require("../../assets/images/session-timer.png")}
            style={{
              width: 45,
              height: 45,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
    </View>
  )
}