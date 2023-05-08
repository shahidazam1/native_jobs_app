import React from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import HomeData from "../views/home";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerLeft: () => (
            <View>
              <Text>.</Text>
            </View>
          ),
          headerRight: () => (
            <View>
              <Text>profile</Text>
            </View>
          ),
          headerTitle: "Home ",
        }}
      />
      <ScrollView>
        <HomeData />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
