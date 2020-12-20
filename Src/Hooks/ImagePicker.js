import {Alert, Platform} from 'react-native';

// import ImagePicker from 'react-native-image-picker';
import React from 'react';
var ImagePicker = require('react-native-image-picker');
export function useImagePicker(width, height) {
  const [image, setImage] = React.useState(null);
  const uploadImage = () => {
    let buttons = [
      {
        text: 'Take a picture',
        onPress: launchCamera,
      },
      {
        text: 'Choose from Library',
        onPress: launchLibrary,
      },
    ];
    if (Platform.OS === 'ios') {
      buttons.push({
        text: 'Cancel',
        style: 'destructive',
      });
    }
    Alert.alert('Choose Option', '', buttons, {
      cancelable: true,
    });
  };
  const launchLibrary = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: width,
      maxHeight: height,
    };
    // Open Image Library:
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response && !response.didCancel) {
        let name = 'image.jpg';
        if (
          response &&
          response.type &&
          response.type.toLowerCase().includes('png')
        ) {
          name = 'image.png';
        }
        const image = {
          name,
          type: response.type,
          uri:
            Platform.OS === 'android'
              ? response.uri
              : response.uri.replace('file://', ''),
          data: response.data,
        };
        setImage(image);
      }
    });
  };
  const launchCamera = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      maxWidth: width,
      maxHeight: height,
    };
    // Launch Camera:
    ImagePicker.launchCamera(options, (response) => {
      if (response && !response.didCancel) {
        let name = 'image.jpg';
        if (
          response &&
          response.type &&
          response.type.toLowerCase().includes('png')
        ) {
          name = 'image.png';
        }
        const image = {
          name,
          type: response.type,
          uri:
            Platform.OS === 'android'
              ? response.uri
              : response.uri.replace('file://', ''),
          data: response.data,
        };
        setImage(image);
      }
    });
  };
  return {uploadImage, image};
}
