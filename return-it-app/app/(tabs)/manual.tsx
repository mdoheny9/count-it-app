import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';

export default function ManualEntry() {
  const router = useRouter();
  const [type, setType] = useState('Aluminum Can');
  const [quantity, setQuantity] = useState('');

  const handleAdd = () => {
    // You can add logic here later to store the entry
    router.push('/'); // Navigate back to home page
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manual Entry</Text>

      <Text style={styles.label}>Select Item Type:</Text>
      <View style={styles.infoBox}>
        <Picker
          selectedValue={type}
          onValueChange={(itemValue) => setType(itemValue)}
          style={styles.picker}
          dropdownIconColor="#ffffff"
          mode="dropdown"
        >
          <Picker.Item label="Aluminum Can" value="Aluminum Can" />
          <Picker.Item label="Plastic Bottle" value="Plastic Bottle" />
          <Picker.Item label="Glass Bottle" value="Glass Bottle" />
        </Picker>
      </View>

      <Text style={styles.label}>Quantity:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
        placeholder="Enter quantity"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003c70',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f9c258',
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    backgroundColor: '#005a9c',
    marginBottom: 15,
  },
  picker: {
    color: '#ffffff',
    backgroundColor: '#005a9c',
    fontSize: 20,
    height: 50,
    width: '100%',
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 6,
    marginBottom: 20,
    color: '#003c70',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#f9c258',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#003c70',
    fontSize: 18,
  },
});