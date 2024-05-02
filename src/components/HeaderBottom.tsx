import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { WeatherData } from "../../app/HomeScreen";

const HeaderBottom = ({ data }: { data: WeatherData }) => {
  console.log(JSON.stringify(data, null, 2));

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 10,

        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: "white",
        marginTop: "auto",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <MaterialCommunityIcons name="weather-windy" size={24} color="white" />
        <Text style={{ color: "#fff" }}>{data.current.wind_kph} Km/h</Text>
        <Text style={{ color: "#fff" }}>Wind</Text>
      </View>
        {/* {console.log(data.current.wind_kph)} */}

      <View style={{ alignItems: "center" }}>
        <Ionicons name="water-outline" size={24} color="white" />
        <Text style={{ color: "#fff" }}>{data.current.humidity}%</Text>
        <Text style={{ color: "#fff" }}>Humidity</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <MaterialIcons name="water" size={24} color="white" />
        <Text style={{ color: "#fff" }}>{data.current.cloud}%</Text>
        <Text style={{ color: "#fff" }}>Cloud</Text>
      </View>
    </View>
  );
};

export default HeaderBottom;

const styles = StyleSheet.create({});
