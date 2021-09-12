import * as React from "react";
import { StyleSheet, Touchable } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Surface } from "react-native-paper";
import { pink100 } from "react-native-paper/lib/typescript/styles/colors";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import Alert from "../Models/Alert";
import { RootTabScreenProps } from "../types";

export default function ViewAlertsScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [alerts, setAlerts] = React.useState<Alert[]>();

  React.useEffect(() => {
    setAlerts(
      [
        new Alert(
          "Home From School",
          "Home from school",
          new Date(2021, 8, 13, 16, 0, 0, 0)
        ),
        new Alert(
          "Home From School",
          "Home from school",
          new Date(2021, 8, 14, 16, 0, 0, 0)
        ),
        new Alert(
          "Home From School",
          "Home from school",
          new Date(2021, 8, 15, 16, 0, 0, 0)
        ),
        new Alert(
          "Home From School",
          "Home from school",
          new Date(2021, 8, 16, 16, 0, 0, 0)
        ),
        new Alert(
          "Home From School",
          "Home from school",
          new Date(2021, 8, 17, 16, 0, 0, 0)
        ),
        new Alert(
          "Arrive at New Orleans Airport",
          "Arrived at NorthWest airport in New Orleans, LA",
          new Date(2021, 8, 18, 4, 0, 0, 0)
        ),
        new Alert(
          "Landed in Miami",
          "Landed in Miami NorthWest Airport",
          new Date(2021, 8, 18, 7, 0, 0, 0)
        ),
        new Alert(
          "Check-in Hotel - Morning",
          "Check into Hilton on 1220 Main St.",
          new Date(2021, 8, 18, 8, 0, 0, 0)
        ),
        new Alert(
          "Check-in Hotel- Evening",
          "Check into Hilton on 1220 Main St.",
          new Date(2021, 8, 18, 23, 0, 0, 0)
        ),
        new Alert(
          "Arrive at Miami Airport",
          "Arrived at NorthWest airport in Miami, FL",
          new Date(2021, 8, 19, 4, 0, 0, 0)
        ),
        new Alert(
          "Landed in New Orleans",
          "Landed in New Orleans NorthWest Airport",
          new Date(2021, 8, 19, 7, 0, 0, 0)
        ),
        new Alert(
          "Arrive back Home",
          "Arrive back home in Baton Rouge",
          new Date(2021, 8, 19, 9, 0, 0, 0)
        ),
      ].sort((a, b) => a.date.getTime() - b.date.getTime())
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 20, flex: 1 }}>
        {alerts?.map((x) => GetAlertData(x))}
      </ScrollView>
    </View>
  );
}

function GetAlertData(alert: Alert) {
  return (
    <Surface style={[styles.surface, { flexDirection: "row" }]}>
      <View>
        <Text style={styles.title}>{alert.title}</Text>
        <Text>{alert.body}</Text>
        <Text>{alert.date?.toLocaleString()}</Text>
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
