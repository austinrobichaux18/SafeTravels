import * as React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Surface } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Contact from "../Models/Contact";

export default function ViewContactsScreen() {
  const [contacts, setContacts] = React.useState<Contact[]>();

  React.useEffect(() => {
    setContacts([
      new Contact(
        "Bob",
        "Ross",
        "bob.ross@gmail.com",
        "(225)-468-4466",
        "Father"
      ),
      new Contact(
        "Georgina",
        "Ross",
        "georgina.ross@gmail.com",
        "(225)-468-8844",
        "Mother"
      ),
      new Contact("Pablo", "Picasso", "ppicasso@gmail.com", "", "Roommate"),
      new Contact("Leonardo", "Da Vinci", "ldvinci@gmail.com", "", "Friend"),
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 20, flex: 1 }}>
        {contacts?.map((x) => GetContactData(x))}
      </ScrollView>
    </View>
  );
}

function GetContactData(contact: Contact) {
  return (
    <Surface style={[styles.surface, { flexDirection: "row" }]}>
      <View>
        <Text style={styles.title}>
          {contact.firstName + " " + contact.lastName}
        </Text>
        <Text>{contact.relationship}</Text>
        <Text>{contact.email}</Text>
        <Text>{contact.phoneNumber}</Text>
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  surface: {
    height: 100,
    margin: 10,
    paddingHorizontal: 10,
    elevation: 4,
  },
});
