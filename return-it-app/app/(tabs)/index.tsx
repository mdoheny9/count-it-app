import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.text}>COUNT-IT</Text>
      </View>

      <View style={styles.tableBox}>
        {/* Info Box at Top of Table */}
        <View style={styles.infoBox}>
          <View style={styles.rowSplitWide}>
            <Text style={styles.infoLeftText}>12 bottles</Text>
            <Text style={styles.infoRightText}>$45.32</Text>
          </View>
        </View>

        {/* Table Rows with Boxes */}
        <View style={styles.tableRowBox}>
          <View style={styles.tableRow}>
            <Image source={require('../../assets/plastic.png')} style={styles.icon} />
            <View style={styles.rowSplit}>
              <Text style={styles.leftText}>Plastic</Text>
              <Text style={styles.rightText}>+ 0.43c</Text>
            </View>
          </View>
        </View>
        <View style={styles.tableRowBox}>
          <View style={styles.tableRow}>
            <Image source={require('../../assets/plastic.png')} style={styles.icon} />
            <View style={styles.rowSplit}>
              <Text style={styles.leftText}>Plastic</Text>
              <Text style={styles.rightText}>+ 0.43c</Text>
            </View>
          </View>
        </View>
        <View style={styles.tableRowBox}>
          <View style={styles.tableRow}>
            <Image source={require('../../assets/plastic.png')} style={styles.icon} />
            <View style={styles.rowSplit}>
              <Text style={styles.leftText}>Plastic</Text>
              <Text style={styles.rightText}>+ 0.43c</Text>
            </View>
          </View>
        </View>

        {/* Fade Indicator */}
        <View style={styles.fadeIndicator}>
          <Text style={styles.fadeText}>⋯</Text>
        </View>

        {/* Full History Box */}
        <View style={styles.historyBox}>
          <Text style={styles.historyText}>See Full History</Text>
        </View>
      </View>

      {/* Plus Button */}
      <View style={styles.plusContainer}>
        <TouchableOpacity style={styles.plusButton}>
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
  tableBox: {
    width: '90%',
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
    padding: 16, // Increased padding
    borderRadius: 10, // Slightly larger radius
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
  fadeIndicator: {
    alignItems: 'center',
    marginVertical: 5,
  },
  fadeText: {
    fontSize: 24,
    color: '#ffffff',
    opacity: 0.5,
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
    marginBottom: 60, // Adds more space below the button
  },
  plusButton: {
    backgroundColor: '#f9c258',
    width: 80, // Smaller size
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