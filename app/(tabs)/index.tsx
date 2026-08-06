import { View, Text, Image } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-bg">
      <View className="flex-row items-center justify-between px-8 py-2 mt-[55px]">
        <View>
          <Text className="font-titleMedium text-2xl">Bom dia, username! </Text>
          <Text className="font-body text-xl">Que tal ler um pouco hoje?</Text>
        </View>

        <Image
          source={require("../../assets/images/icons/notification.png")}
          style={{
            width: 35,
            height: 35,
          }}
        />
      </View>
    </View>
  )
}