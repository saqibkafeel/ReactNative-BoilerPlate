import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import BPColors from '../../../Common/Constants/BPColors';
import NavigationService from '../../../Routes/NavigationService';

const BPHomeScreen = (props) => {
  function navigateToFirstScreen() {
    NavigationService.navigate('HomeStack', {
      screen: 'FirstScreen',
    });
  }
  function navigateToSecondScreen() {
    NavigationService.navigate('HomeStack', {
      screen: 'SecondScreen',
    });
  }
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={() => {
            navigateToFirstScreen();
          }}>
          <Text style={styles.screen1Text}>Navigate To First Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigateToSecondScreen();
          }}>
          <Text style={styles.screen2Text}>Navigate To Second Screen</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#00000010',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen1Text: {
    fontSize: 22,
    margin: 20,
    color: BPColors.BlueTextColor,
  },
  screen2Text: {
    fontSize: 22,
    margin: 20,
    color: BPColors.BlueTextColor,
  },
});

export default BPHomeScreen;
