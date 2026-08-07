import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Redirect, router } from 'expo-router'
import MetaDiaria from '@/components/home/MetaDiaria'
import { ScrollView } from 'react-native-gesture-handler'
import EmAndamento from '@/components/home/EmAndamento'

export default function HomeScreen() {
  

  return (
    <ScrollView className="flex-1 bg-bg">
      <View className="flex-row items-center justify-between px-8 py-2 mt-[55px]">
        <View>
          <Text className="font-titleMedium text-2xl">Bom dia, username! </Text>
          <Text className="font-body text-xl">Que tal ler um pouco hoje?</Text>
        </View>

        <TouchableOpacity
          onPress={() => router.push("/notifications/notifications")}
          activeOpacity={0.9}
        >
          <Image
            source={require("../../assets/images/icons/notification.png")}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
      </View>

      <MetaDiaria/>

      <EmAndamento/>
      <EmAndamento/>
      <EmAndamento/>


    </ScrollView>
  )
}