import "expo-router/entry";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista De Anime</Text>

      <Image
        source={require("../assets/images/portada.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Ver Animes</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E63946",
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 380,
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
    fontWeight: "600",
  },
});
