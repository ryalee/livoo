import { View, Text } from "react-native";
import React, { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Leia sem pressa.",
    description:
      "Crie uma rotina de leitura simples, sem pressão e sem distrações.",
    image: require("@/assets/onboarding/1.png"),
  },

  {
    id: 2,
    title: "Transforme minutos em capítulos.",
    description:
      "Poucos minutos por dia são suficientes para construir um hábito.",
    image: require("@/assets/onboarding/2.png"),
  },

  {
    id: 3,
    title: "Acompanhe sua jornada.",
    description: "Veja seu progresso crescer sessão após sessão.",
    image: require("@/assets/onboarding/3.png"),
  },

  {
    id: 4,
    title: "Pronto para começar?",
    description: "Adicione seu primeiro livro e faça seu primeiro voo.",
    image: require("@/assets/onboarding/4.png"),
  },
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
