import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import { Button, Platform, StyleSheet } from "react-native";
import DatePicker from "react-native-date-picker";
import { TextInput } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Alert from "../Models/Alert";

export default function ManageAlertScreen() {
  const [myAlert, setAlert] = React.useState<Alert>(
    new Alert("", "", new Date())
  );
  // const [open, setOpen] = useState<boolean>(false);
  // const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Alert</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View>
        <Text>Title</Text>
        <TextInput
          placeholder="Enter a Title"
          style={styles.input}
          onChangeText={(t) => setAlert({ ...myAlert, title: t })}
        ></TextInput>
      </View>
      <View>
        <Text>Body</Text>
        <TextInput
          placeholder="Enter a Body"
          style={styles.inputBig}
          onChangeText={(t) => setAlert({ ...myAlert, body: t })}
        ></TextInput>
      </View>
      <View>
        {/* <Button title="Open" onPress={() => setOpen(true)} /> */}
        {/* <DatePicker
          modal
          open={open}
          onDateChange={() => setDate(date)}
          date={date}
          onConfirm={(date) => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        /> */}
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    margin: 15,
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  inputBig: {
    height: 140,
    margin: 15,
    textAlignVertical: "top",
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "black",
    borderWidth: 1,
  },
});
