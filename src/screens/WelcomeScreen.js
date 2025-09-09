import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WelcomeScreen = () => {
  return (
    <View
      style={tw`flex-1 justify-center items-center space-y-10 bg-amber-500`}
    >
      <StatusBar style="light" />

      {/* logo with rings */}
      <View style={[tw`bg-white/20 rounded-full`, { padding: hp(5) }]}>
        <View style={[tw`bg-white/20 rounded-full`, { padding: hp(4.5) }]}>
          <Image
            style={[tw`rounded-full`, { width: hp(20), height: hp(20) }]}
            source={require("../../assets/welcome.jpeg")}
          />
        </View>
      </View>

      {/* title and punchline */}
      <View style={tw`flex items-center space-y-2`}>
        <Text
          style={[
            tw`font-bold text-white tracking-widest text-6xl`,
            { fontSize: hp(7) },
          ]}
        >
          Foddy
        </Text>
        <Text
          style={[
            tw`font-medium text-white tracking-widest text-lg`,
            { fontSize: hp(2) },
          ]}
        >
          Food is always right
        </Text>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
