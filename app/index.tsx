import { Redirect } from "expo-router";
import Welcome from "./(welcome)";

export default function Index() {
  // const hasSeenOnboarding = false;
  // const isLogged = true;

  // if (!hasSeenOnboarding) {
  //   return <Redirect href="/(welcome)/index" />;
  // }

  // if (!isLogged) {
  //   return <Redirect href="/(auth)/sign-in" />;
  // }

  // return <Redirect href="/(tabs)/index" />;

  return <Welcome/>;
}