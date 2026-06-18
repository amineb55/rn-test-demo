import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello from AndroidBuild!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {fontSize: 22, color: '#2EA86A'},
});

export default App;
