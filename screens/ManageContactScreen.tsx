import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import { Button, Platform, StyleSheet } from "react-native";
import DatePicker from "react-native-date-picker";
import { ScrollView } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Alert from "../Models/Alert";
import Contact from "../Models/Contact";

export default function ManageContactScreen() {
  const [myContact, setContact] = React.useState<Contact>(
    new Contact("", "", "", "", "")
  );
  // const [open, setOpen] = useState<boolean>(false);
  // const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Contact</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <ScrollView>
        <View>
          <Text>First Name</Text>
          <TextInput
            placeholder="Enter a First Name"
            style={styles.input}
            onChangeText={(t) => setContact({ ...myContact, firstName: t })}
          ></TextInput>
        </View>
        <View>
          <Text>Last Name</Text>
          <TextInput
            placeholder="Enter a Last Name"
            style={styles.inputBig}
            onChangeText={(t) => setContact({ ...myContact, lastName: t })}
          ></TextInput>
        </View>
        <View>
          <Text>Email</Text>
          <TextInput
            placeholder="Enter a Email"
            style={styles.input}
            onChangeText={(t) => setContact({ ...myContact, email: t })}
          ></TextInput>
        </View>
        <View>
          <Text>Phone Number</Text>
          <TextInput
            placeholder="Enter a Phone Number"
            style={styles.input}
            onChangeText={(t) => setContact({ ...myContact, phoneNumber: t })}
          ></TextInput>
        </View>
        <View>
          <Text>Relationship</Text>
          <TextInput
            placeholder="Enter a Relationship"
            style={styles.input}
            onChangeText={(t) => setContact({ ...myContact, relationship: t })}
          ></TextInput>
        </View>
      </ScrollView>
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
