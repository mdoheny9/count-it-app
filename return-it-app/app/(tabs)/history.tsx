import { View, Text, StyleSheet, ScrollView } from 'react-native';

const historyItems = [
  { date: 'Oct 18, 2025', items: '8 bottles', total: '$3.20' },
  { date: 'Oct 17, 2025', items: '5 bottles', total: '$2.00' },
  { date: 'Oct 16, 2025', items: '10 bottles', total: '$4.00' },
];

export default function History() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Full History</Text>
      <ScrollView style={styles.scroll}>
        {historyItems.map((entry, index) => (
          <View key={index} style={styles.entryBox}>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.details}>{entry.items} - {entry.total}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003c70',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f9c258',
    marginBottom: 20,
    textAlign: 'center',
  },
  scroll: {
    flex: 1,
  },
  entryBox: {
    backgroundColor: '#004080',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  date: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 4,
  },
});