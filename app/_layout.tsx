import { Stack, Redirect } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";
import * as Font from "expo-font";
import "../global.css";

console.log(Font.getLoadedFonts());

import {
  MontserratAlternates_400Regular,
  MontserratAlternates_500Medium,
  MontserratAlternates_600SemiBold,
} from "@expo-google-fonts/montserrat-alternates";

import { NothingYouCouldDo_400Regular } from "@expo-google-fonts/nothing-you-could-do";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

SplashScreen.preventAutoHideAsync();

// function AuthGuard() {
//   const { isSignedIn } = { isSignedIn: true };

//   if (!isSignedIn) {
//     return <Redirect href="/(auth)" />;
//   } else if (isSignedIn) {
//     return <Redirect href="/(tabs)" />;
//   }
// }

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,

    MontserratAlternates_400Regular,
    MontserratAlternates_500Medium,
    MontserratAlternates_600SemiBold,

    NothingYouCouldDo_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  console.log({ loaded, error });

  return (
    <GestureHandlerRootView>
      {/* <AuthGuard /> */}

      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />

        <Stack.Screen name="(welcome)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />

        <Stack.Screen
          name="modal"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
