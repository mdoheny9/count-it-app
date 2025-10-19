import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const items = [
  { type: 'Aluminum Can', value: '+ 0.10c', icon: require('../../assets/alum.png') },
  { type: 'Plastic Bottle', value: '+ 0.10c', icon: require('../../assets/plastic.png') },
  { type: 'Glass Bottle', value: '+ 0.10c', icon: require('../../assets/glass.png') },
  { type: 'Plastic Bottle', value: '+ 0.10c', icon: require('../../assets/plastic.png') },
  { type: 'Aluminum Can', value: '+ 0.10c', icon: require('../../assets/alum.png') },
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.text}>COUNT-IT</Text>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableBox}>
          <View style={styles.infoBox}>
            <View style={styles.rowSplitWide}>
              <Text style={styles.infoLeftText}>12 bottles</Text>
              <Text style={styles.infoRightText}>Total: $14.32</Text>
            </View>
          </View>

          <ScrollView style={styles.scrollArea}>
            {items.map((item, index) => (
              <View key={index} style={styles.tableRowBox}>
                <View style={styles.tableRow}>
                  <Image source={item.icon} style={styles.icon} />
                  <View style={styles.rowSplit}>
                    <Text style={styles.leftText}>{item.type}</Text>
                    <Text style={styles.rightText}>{item.value}</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>

          <View style={styles.historyBox}>
            <TouchableOpacity onPress={() => router.push('/history')}>
              <Text style={styles.historyText}>See Full History</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.plusContainer}>
        <TouchableOpacity style={styles.plusButton} onPress={() => router.push('/camera')}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003c70',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  headerBox: {
    borderWidth: 2,
    borderColor: '#f9c258',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#002b50',
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  text: {
    color: '#f9c258',
    fontWeight: 'bold',
    fontSize: 32,
  },
  tableContainer: {
    flex: 1,
    width: '90%',
    marginBottom: 20,
  },
  scrollArea: {
    maxHeight: 200,
  },
  tableBox: {
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 8,
    backgroundColor: '#004080',
    padding: 10,
  },
  rowSplitWide: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#005a9c',
    marginBottom: 15,
  },
  infoLeftText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoRightText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  tableRowBox: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
    backgroundColor: '#003366',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowSplit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  historyBox: {
    marginTop: 10,
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#003366',
    alignItems: 'center',
  },
  historyText: {
    color: '#f9c258',
    fontSize: 16,
    fontWeight: '600',
  },
  plusContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 60,
  },
  plusButton: {
    backgroundColor: '#f9c258',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  plusText: {
    fontSize: 48,
    color: '#003c70',
    fontWeight: 'bold',
    lineHeight: 48,
    textAlign: 'center',
  },
});