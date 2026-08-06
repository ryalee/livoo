import { ImageSourcePropType } from "react-native";

export interface OnboardingSlide {
  id: number;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
}

export const onboardingSlides: OnboardingSlide[] = [
  {
    id: 1,
    title: "Foco no que realmente importa",
    subtitle: "Elimine distrações e crie espaço para o que transforma: a sua leitura!",
    image: require("../assets/images/slide1.png"),
  },

  {
    id: 2,
    title: "Acompanhe sua evolução",
    subtitle: "Visualize seu progresso com dados que te motivam a continuar.",
    image: require("../assets/images/slide2.png"),
  },

  {
    id: 3,
    title: "Um ritual simples e consistente",
    subtitle: "Pequenas sessões diárias geram grandes mudanças ao longo do tempo.",
    image: require("../assets/images/slide3.png"),
  },

  {
    id: 4,
    title: "Seu espaço suas regras",
    subtitle: "Personalize a sua experiência e torne a leitura parte da sua rotina.",
    image: require("../assets/images/slide4.png"),
  },

  {
    id: 5,
    title: "Tudo pronto!",
    subtitle: "Pegue seu café e vamos começar essa jornada juntos!",
    image: require("../assets/images/slide5.png"),
  },
];
