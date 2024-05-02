import {
  Image,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  GestureDetector,
  Directions,
  Gesture,
} from "react-native-gesture-handler";

import Animated, {
  FadeIn,
  FadeOut,
  BounceInLeft,
  BounceOutRight,
  BounceInRight,
  SlideInLeft,
  SlideOutRight,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

const OnboardingSteps = [
  {
    title: "Welcome to Weather Info",
    description:
      " Know what to expect with our personalized weather forecasts for wherever you roam ️",
    icon: require("../assets/onboarding/img1.gif"),
  },
  {
    title: "Location on point!",
    description:
      " Set your location for hyper-local weather updates.  Never get caught in the rain again! ️",
    icon: require("../assets/onboarding/img2.gif"),
  },
  {
    title: "Beyond the basics!",
    description:
      "Get more than just temperature with weather alerts, air quality, and sunrise/sunset times.   Stay informed and plan your day perfectly!",
    icon: require("../assets/onboarding/img3.gif"),
  },
];

const Onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = OnboardingSteps[screenIndex];
  const onContinue = () => {
    if (screenIndex === OnboardingSteps.length - 1) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const endOnboarding = async () => {
    router.replace('./HomeScreen');
    await  AsyncStorage.setItem("appLaunched", "false");
  };
  const onBack = () => {
    const firstScreen = screenIndex == 0;
    if (firstScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipeNext = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);
  const swipePrev = Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack);
  const swipes = Gesture.Simultaneous(swipeNext, swipePrev);

  return (
    <SafeAreaView
      style={[
        styles.page,
        { paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0 },
      ]}
    >
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.stepIndicatorContainer}>
        {OnboardingSteps.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: screenIndex == index ? "#cef202" : "grey" },
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={swipes}>
        <Animated.View
          style={styles.pageContent}
          entering={FadeIn}
          key={screenIndex}
        >
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Image source={data.icon} style={styles.image} />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={FadeIn}
              exiting={FadeOut.delay(150)}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft.delay(150)}
              style={styles.subtitle}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text style={styles.buttonText} onPress={endOnboarding}>Skip</Text>
              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#15141a",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 30,
    width: 400,
    aspectRatio: 1,
  },
  title: {
    color: "#fdfdfd",
    fontSize: 50,
    fontWeight: "bold",
    fontFamily: "OswalRegular",
    letterSpacing: 1.3,
    marginVertical: 10,
  },
  subtitle: {
    color: "grey",
    fontSize: 25,
    lineHeight: 25,
  },
  footer: {
    marginTop: "auto",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  button: {
    backgroundColor: "#302e34",
    borderRadius: 20,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fdfdfd",
    fontWeight: "bold",
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 15,
  },
  buttonsRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  stepIndicatorContainer: {
    width: "100%",
    height: 5,
    flexDirection: "row",
    gap: 5,
  },
  dot: { flex: 1, backgroundColor: "grey", borderRadius: 10 },
});
