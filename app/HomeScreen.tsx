import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ActivityIndicator,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import HeaderView from "../src/components/HeaderView";
import HeaderBottom from "../src/components/HeaderBottom";
import Bottom from "../src/components/Bottom";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import * as Location from "expo-location";

export type WeatherData = {
  location: {
    name: String;
    region: String;
    localtime: String;
  };
  current: {
    temp_c: number;

    condition: {
      text: String;
      icon:String
    };
    wind_kph: number;
    humidity: number;
    cloud: number;
  };
};

const BASE_URL = `http://api.weatherapi.com/v1/forecast.json?key=f67fa60c8def47a7a4362739241304`;

export default function HomeScreen() {
  const [data, setdata] = useState<WeatherData>();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      dataFetch();
    }
  }, [location]);

  const dataFetch = async () => {
    if (!location) {
      return;
    }
    try {
      const response = await fetch(
        `${BASE_URL}&q=${location?.coords.latitude},${location.coords.latitude}&days=6&aqi=yes`
      );
      const data = await response.json();
      setdata(data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(JSON.stringify(data, null, 2));

  {
    if (!data) {
      return <ActivityIndicator />;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LinearGradient
        colors={["#00E8F5", "#00A8F5"]}
        style={{
          flex: 1,
          borderBottomLeftRadius: 70,
          borderBottomRightRadius: 70,
          overflow: "hidden",
        }}
      >
        <HeaderView data={data} />
        <View style={{ alignItems: "center" }}>
          {/* <LottieView
            source={require("../assets/lottie/3dcloud.json")}
            style={{ height: 200, aspectRatio: 1 }}
            autoPlay
            loop
          /> */}
          <Image source={{uri:`http:${data.current.condition.icon}`}} style={{width:200,height:200}} />
          <Text style={{ fontSize: 100, color: "white" }}>
            {Math.round(data.current.temp_c)}°
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            {data.current.condition.text}
          </Text>
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {data.location.localtime}
          </Text>
        </View>
        <HeaderBottom data={data} />
      </LinearGradient>
      <Bottom  />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#000",
  },
});
