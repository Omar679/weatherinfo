import Animated, { FadeOut } from "react-native-reanimated";

import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
  useFonts,
} from "@expo-google-fonts/oswald";
import { Stack } from "expo-router";
import LottieView from "lottie-react-native";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [sPlashAnimationFinished, setSPlashAnimationFinished] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    OswalELight: Oswald_200ExtraLight,
    OswalLight: Oswald_300Light,
    OswalRegular: Oswald_400Regular,
    OswalMedium: Oswald_500Medium,
    OswalSemiBold: Oswald_600SemiBold,
    OswalBold: Oswald_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setIsLoaded(true);
    }
  }, [fontsLoaded, fontError]);

  const showAnimated = !isLoaded || !sPlashAnimationFinished;
  if (showAnimated) {
    return (
      <Animation setSPlashAnimationFinished={setSPlashAnimationFinished} />
    );
  }

  return (
   
      <Stack />
 
  );
}

const Animation = ({
  setSPlashAnimationFinished = (isCanceled) => {},
}: {
  setSPlashAnimationFinished?: (isCanceled: boolean) => void;
}) => {
  return (
    <Animated.View
      exiting={FadeOut}
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <LottieView
        onAnimationFinish={(isCanceled) => {
          if (!isCanceled) {
            setSPlashAnimationFinished(true);
          }
        }}
        autoPlay
        loop={false}
        style={{
          width: "100%",
          aspectRatio: 1,
          backgroundColor: "#fff",
        }}
        source={require("../assets/lottie/splash.json")}
      />
    </Animated.View>
  );
};
