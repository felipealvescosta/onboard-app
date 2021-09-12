import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "1",
    title: "E aí meu patrão!",
    image: require("./src/assets/1.png"),
  },
  {
    key: "2",
    title: "Tá fazendo o quê hoje?",
    image: require("./src/assets/2.png"),
  },
  {
    key: "3",
    title: "Bora tirar essa ideia do papel ?!",
    image: require("./src/assets/3.png"),
  },
];

export default function App() {
  function handleOnboarding({ item }) {
    return (
      <View style={{ flex: 1 }}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.title}</Text>
      </View>
    );
  }

  return (
    <AppIntroSlider
      style={styles.container}
      data={slides}
      renderItem={handleOnboarding}
      activeDotStyle={{
        backgroundColor: "#ffffffff",
        width: 30,
      }}
      dotStyle={{
        backgroundColor: "#ffffffff",
      }}
      renderNextButton={() => <Text style={styles.button}>Próximo</Text>}
      renderDoneButton={() => <Text style={styles.button}>Protinho!</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
  image: { height: "75%", width: "100%" },
  text: {
    color: "#ffffff",
    fontSize: 30,
    textAlign: "center",
    paddingLeft: "10%",
    paddingRight: "10%",
    fontWeight: "bold",
  },
  button: { color: "#ffffff", fontSize: 20, paddingTop: 7 },
});
