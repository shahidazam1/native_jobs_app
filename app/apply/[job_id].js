import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import ApplyNow from "../../views/apply";

const Apply = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerTitle: "Apply Now ",
        }}
      />
      <ScrollView>
        <ApplyNow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Apply;
