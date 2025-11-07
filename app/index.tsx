import "expo-router/entry";
import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Home() {
  return (
       <ImageBackground
      source={require("../assets/images/portada.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <Text style={styles.header}>Lista de Anime</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Animes</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: "#ffffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  header: {
     fontSize: 35,
    fontWeight: "bold",
    color: "#3e3e3eff",
    marginBottom: 25,
    },
  image: {
    width: 300,
    height: 500,
    borderRadius: 15,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#457B9D",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
    background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});




