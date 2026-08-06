import { useState } from "react";
import { View } from "react-native";
import { router } from "expo-router";

import { onboardingSlides } from "../../constants/onboarding";

import { OnboardingSlide } from "../../components/onboarding/OnboardingSlide";
import { Indicator } from "../../components/onboarding/Indicator";
import { NextButton } from "../../components/onboarding/NextButton";

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const isLast = currentSlide === onboardingSlides.length - 1;

  function handleNext() {
    if (isLast) {
      router.replace("/(auth)/sign-in");
      return;
    }

    setCurrentSlide((prev) => prev + 1);
  }

  return (
    <View className="flex-1 bg-white">

      <View className="flex-1">
        <OnboardingSlide
          slide={onboardingSlides[currentSlide]}
        />
      </View>

      <View className="px-8 pb-12">

        <Indicator
          total={onboardingSlides.length}
          current={currentSlide}
        />

        <View className="mt-8">
          <NextButton
            isLast={isLast}
            onPress={handleNext}
          />
        </View>

      </View>

    </View>
  );
}