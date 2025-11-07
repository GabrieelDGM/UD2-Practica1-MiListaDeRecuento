import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export default function AnimeList() {
    const animes = [
        {
            id: 1,
            nombre: "One Piece",
            categoria: "Shōnen",
            precio: "100 millones USD",
            imagen: require("../assets/images/onepiece.jpg"),
        },
        {
            id: 2,
            nombre: "Naruto",
            categoria: "Shōnen",
            precio: "95 millones USD",
            imagen: require("../assets/images/naruto.jpg"),
        },
        {
            id: 3,
            nombre: "Shingeki no Kyojin",
            categoria: "Seinen",
            precio: "80 millones USD",
            imagen: require("../assets/images/ataque.jpg"),
        },
        {
            id: 4,
            nombre: "Kimetsu no Yaiba",
            categoria: "Shōnen",
            precio: "70 millones USD",
            imagen: require("../assets/images/kimtesu.jpg"),
        },
        {
            id: 5,
            nombre: "Dandanda",
            categoria: "Shōnen",
            precio: "50 millones USD",
            imagen: require("../assets/images/dadan.jpg"),
        },
        {
            id: 6,
            nombre: "Jujutsu Kaisen",
            categoria: "Shōnen",
            precio: "60 millones USD",
            imagen: require("../assets/images/jujutsu.jpg"),
        },
        {
            id: 7,
            nombre: " Solo Leveling",
            categoria: "Shōnen",
            precio: "45 millones USD",
            imagen: require("../assets/images/solo.jpg"),
        },
        {
            id: 8,
            nombre: "Sono Bisque Doll wa Koi wo Suru",
            categoria: "Romncom",
            precio: "40 millones USD",
            imagen: require("../assets/images/sono.jpg"),

        },
        {
            id: 9,
            nombre: "Black Clover",
            categoria: "Shōnen",
            precio: "55 millones USD",
            imagen: require("../assets/images/black.jpg"),
        },
        {
            id: 10,
            nombre: "Monster",
            categoria: "Psicológico",
            precio: "30 millones USD",
            imagen: require("../assets/images/monster.jpg"),
        }
        

    ];
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Animes</Text>

      <FlatList
        data={animes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.category}>{item.categoria}</Text>
              <Text style={styles.price}>{item.precio}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDF6F0",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#5D534A",
  },
  card: {
    backgroundColor: "#FFEFE7",
    borderRadius: 15,
    padding: 12,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    elevation: 3,
  },
  image: {
    width: 90,
    height: 120,
    borderRadius: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4A4A4A",
  },
  category: {
    fontSize: 14,
    color: "#7D6E83",
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#E26A6A",
    marginTop: 6,
  },
});