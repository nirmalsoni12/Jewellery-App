import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💎 Jewellery App</Text>
      <Text style={styles.text}>Welcome Nikhil 🚀</Text>
      <Text style={styles.text}>App successfully running 🎉</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 28,
    color: "#facc15",
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
});
