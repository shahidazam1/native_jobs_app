import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const inst = {
  name: "",
  noOfExp: "",
  currentCTC: "",
  noticePeriod: "",
};

const ApplyNow = () => {
  const [state, setState] = useState({
    ...inst,
  });

  const onChangeText = (e, name) => {
    setState({ ...state, [name]: e });
  };

  const handlePressApply = () => {
    let emtData = Object.values(state);

    if (emtData.some((item) => item === ""))
      return console.warn("Please Fill All Details");
    console.log(state);
    setState({ ...inst });
  };

  return (
    <View style={styles.main}>
      <View style={styles.item}>
        <Text>Enter Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => onChangeText(e, "name")}
          value={state?.name}
          placeholder="Full Name"
        />
      </View>
      <View style={styles.item}>
        <Text>Enter Experience</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => onChangeText(e, "noOfExp")}
          value={state?.noOfExp}
          placeholder="Experience "
          keyboardType="numeric"
        />
      </View>
      <View style={styles.item}>
        <Text>Enter Current CTC</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => onChangeText(e, "currentCTC")}
          value={state?.currentCTC}
          placeholder="ctc"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.item}>
        <Text>Notice Period Duration</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => onChangeText(e, "noticePeriod")}
          value={state?.noticePeriod}
          placeholder="Potice Period in Days"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.btnCtr}>
        <TouchableOpacity style={styles.button} onPress={handlePressApply}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ApplyNow;

const styles = StyleSheet.create({
  main: {
    margin: 10,
    padding: 8,
    backgroundColor: "lightgrey",
  },
  input: {
    height: 40,
    marginTop: 10,
    borderWidth: 1,
  },
  item: {
    marginTop: 10,
  },

  button: {
    alignItems: "center",
    backgroundColor: "#FFFFE3",
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
  btnCtr: {
    flexDirection: "row",
    marginTop: 10,
  },
});
