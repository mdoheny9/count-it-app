import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

import CaptureButton from '@/components/CaptureButton';
import IconButton from '@/components/IconButton';


export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const ref = useRef<CameraView>(null);
  const [uri, setUri] = useState<string | null>(null);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const selectedUri = result.assets[0].uri;
            setUri(selectedUri); 
        } else {
        alert('You did not select any image.');
        }
    };

    const takePicture = async () => {
        const photo = await ref.current?.takePictureAsync();
        if (photo?.uri) setUri(photo.uri);
    };

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const resetPhoto = () => setUri(null);

    return (
    <View style={styles.container}>
      {uri ? (
        <>
          <Image source={{ uri }} style={styles.preview} />
          <View style={styles.buttonContainer}>
            <Button title="Retake" onPress={resetPhoto} />
            <Button title="Submit" onPress = {() => alert("photo submitted")} />
          </View>
        </>
      ) : (
        <>
          <CameraView ref={ref} style={styles.camera} facing={facing} />
          <View style={styles.buttonContainer}>
            <IconButton icon="refresh" onPress={toggleCameraFacing} />
            <CaptureButton onPress={takePicture} />
            <IconButton icon="preview" onPress={pickImageAsync} />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
    margin: 10,
  },
  buttonContainer: {
    // justifyContent: "center",
    alignItems: "center",
    padding: 10,
    flexDirection: 'row',
    justifyContent: "space-around",
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  preview: {
    flex: 1,
    margin: 10,
    borderRadius: 12,
  },
});