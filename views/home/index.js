import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const HomeData = () => {
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.header}>Job Openings</Text>
      </View>
      <FlatList
        data={jobsData}
        renderItem={(item) => <DataCard value={item} />}
      />
    </View>
  );
};

export default HomeData;

const DataCard = ({ value }) => {
  let { index, item } = value;

  const router = useRouter();

  const handlePressApply = (item) => {
    router.push(`/apply/${item}`);
  };

  const handlePress = (item) => {
    router.push(`${item}`);
  };

  return (
    <View style={styles.jobsCard}>
      <View style={styles.cardDec}>
        <Text style={styles.cardDec}>Job Id : </Text>
        <Text>{item.id}</Text>
      </View>
      <View style={styles.cardDec}>
        <Text style={styles.cardDec}>Job Title : </Text>
        <Text>{item.jobName}</Text>
      </View>
      <View style={styles.cardDec}>
        <Text style={styles.cardDec}>Description : </Text>
        <Text style={styles.dataStyle}>{item.desc}</Text>
      </View>
      <View style={styles.btnCtr}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(item.id)}
        >
          <Text>View More</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRight}
          onPress={(item) => handlePressApply(item.id)}
        >
          <Text>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    padding: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  jobsCard: {
    borderWidth: 1,
    borderColor: "grey",
    margin: 5,
    borderRadius: 5,
    padding: 5,
    flexWrap: "wrap",
  },
  cardDec: {
    flexDirection: "row",
    fontWeight: "bold",
    marginBottom: 1,
  },
  dataStyle: {
    flex: 1,
    flexWrap: "wrap",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    flex: 1,
    borderTopStartRadius: 5,
    borderBottomLeftRadius: 5,
  },
  buttonRight: {
    alignItems: "center",
    backgroundColor: "#FFFFE3",
    padding: 10,
    flex: 1,
    borderTopEndRadius: 5,
    borderBottomRightRadius: 5,
  },
  btnCtr: {
    flexDirection: "row",
    marginTop: 10,
  },
});

export const jobsData = [
  {
    id: 1,
    jobName: "React js Developer",
    desc: "this is for react developer position 3 years exp required. good to havejavascript, html, css. And noce to have good Communication Skils.",
  },

  {
    id: 2,
    jobName: "Node js Developer",
    desc: "this is for react developer position 3 years exp required. good to havejavascript, html, css.",
  },
  {
    id: 3,
    jobName: "Java Developer",
    desc: "this is for react developer position 3 years exp required. good to havejavascript, html, css. Strong understanding of oops.",
  },
  {
    id: 4,
    jobName: "Spring Boot Developer",
    desc: "this is for react developer position 3 years exp required. Good to have javascript, html, css. Strong understanding of oops.",
  },
];
