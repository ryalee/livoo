import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function notifications() {
  return (
    <View className="flex-1 bg-bg items-start">
      <TouchableOpacity
        onPress={() => router.back()}
        className="bg-accent p-3 mt-14 rounded-full ml-6 -rotate-180"
      >
        <Image
          source={require("../../assets/images/next.png")}
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>

      <View className="text-center w-full">
        <Text className="text-center">Notificações</Text>
      </View>
    </View>
  )
}