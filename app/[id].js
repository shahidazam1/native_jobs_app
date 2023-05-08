import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import JobDetails from "../views/jobs";

const ViewMore = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "white" },
          headerShadowVisible: false,
          headerTitle: "Job Details ",
        }}
      />
      <ScrollView>
        <JobDetails />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewMore;
