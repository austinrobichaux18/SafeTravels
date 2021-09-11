import * as React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { RootStackScreenProps } from "../types";

export default function LoginScreen({
  navigation,
}: RootStackScreenProps<"Login">) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/Background.jpg")}
        style={styles.container}
      >
        <Text
          style={[
            styles.title,
            {
              position: "absolute",
              top: 200,
            },
          ]}
        >
          Safe Travels
        </Text>

        <View
          style={{
            position: "absolute",
            bottom: 100,
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", transform: [{ scale: 1.3 }] }}
            onPress={() => navigation.replace("Root")}
          >
            <View style={[styles.leftArrow, { marginHorizontal: -11 }]}></View>
            <View style={[styles.middleArrow, { marginTop: -4 }]}>
              <Text style={styles.text}>Log in</Text>
            </View>
            <View style={[styles.rightArrow, { marginHorizontal: -11 }]}></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: "row",
              marginTop: 20,
              transform: [{ scale: 1.3 }],
            }}
            onPress={() => navigation.replace("Root")}
          >
            <View style={[styles.leftArrow, { marginHorizontal: -11 }]}></View>
            <View style={[styles.middleArrow, { marginTop: -4 }]}>
              <Text style={styles.text}>Sign Up</Text>
            </View>
            <View style={[styles.rightArrow, { marginHorizontal: -11 }]}></View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 30,
    fontVariant: ["small-caps"],
    textShadowColor: "black",
    color: "white",
    textShadowRadius: 4,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
    textAlign: "center",
    fontVariant: ["small-caps"],
    textShadowColor: "black",
    color: "white",
    textShadowRadius: 10,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
    borderWidth: 2,
    borderRadius: 50,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
  leftArrow: {
    width: 20,
    backgroundColor: "transparent",
    height: 20,
    transform: [{ rotate: "45deg" }],
    borderLeftColor: "white",
    borderLeftWidth: 4,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
  middleArrow: {
    width: 100,
    backgroundColor: "transparent",
    height: 28,
    borderTopColor: "white",
    borderTopWidth: 4,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
  rightArrow: {
    width: 20,
    backgroundColor: "transparent",
    height: 20,
    transform: [{ rotate: "225deg" }],
    borderLeftColor: "white",
    borderLeftWidth: 4,
    borderBottomColor: "white",
    borderBottomWidth: 4,
  },
});
