import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BPFirstScreen = (props) => {
  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.screenText}>I am First Screen</Text>
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
  screenText: {
    fontSize: 22,
    margin: 20,
  },
});

export default BPFirstScreen;
