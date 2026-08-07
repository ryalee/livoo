import { View, Text } from 'react-native'
import React from 'react'

export default function library() {
  return (
    <View className="flex-1 items-center justify-center bg-bg">
      <Text className="font-logo text-4xl">Biblioteca</Text>
      <Text className="font-body text-lg text-center px-4">
        Essa tela mostrará os livros lidos, os que quero ler e os que estou lendo. Também contará com um pequeno bloco com informações relacionadas ao progresso (tempo, paginas, etc) de maneira resumida, as informações completas irão aparecer no perfil com mais detalhes
      </Text>
    </View>
  )
}