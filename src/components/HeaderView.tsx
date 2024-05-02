import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { WeatherData } from "../../app/HomeScreen";

const HeaderView = ({data}:{data:WeatherData}) => {
  return (
    <View style={styles.container}>
      <View style={{borderWidth:1, padding:10, borderColor:'#fff',borderRadius:50}}>
        <Octicons name="apps" size={20} color="white" />
      </View>
      <View style={styles.location}>
        <Octicons name="location" size={20} color="white" />
        <Text style={{color:'white'}}>{data.location.name},{data.location.region} </Text>
      </View>
      <Entypo name="dots-three-vertical" size ={24} color="white" />
    </View>
  );
};

export default HeaderView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  location: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
});
