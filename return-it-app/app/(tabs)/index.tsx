import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style ={styles.text}>Main Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003c70',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#f9c258',
    fontWeight: 'bold',
    fontSize: 24,
  },
});