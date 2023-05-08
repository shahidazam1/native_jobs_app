import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSearchParams } from "expo-router";
import { jobsData } from "../home";

const JobDetails = () => {
  const { id } = useSearchParams();
  const [state, setState] = useState();

  useEffect(() => {
    let data = jobsData?.find((item) => item.id === +id);
    setState(data);
  }, [id]);

  return (
    <View style={styles.main}>
      <View style={styles.card}>
        <Text style={[styles.title, styles.size]}>Job Title : </Text>
        <Text style={styles.size}>{state?.jobName}</Text>
      </View>
      <View style={styles.desc}>
        <Text>
          {state?.desc} {state?.desc} {state?.desc} {state?.desc} {state?.desc}{" "}
          {state?.desc}
        </Text>
      </View>
    </View>
  );
};

export default JobDetails;

const styles = StyleSheet.create({
  main: {
    padding: 10,
  },
  card: {
    flexDirection: "row",
  },
  title: {
    fontWeight: "bold",
  },
  size: {
    fontSize: 20,
  },
  desc: {
    marginTop: 15,
  },
});
