import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AndroidBuild Demo</Text>
      <Text style={styles.subtitle}>Accueil</Text>
      <Button title="Voir les details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Page Details</Text>
      <Text style={styles.subtitle}>Compile par AndroidBuild</Text>
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Accueil'}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title: 'Details'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20},
  title: {fontSize: 24, fontWeight: 'bold', color: '#2EA86A', marginBottom: 10},
  subtitle: {fontSize: 16, color: '#555', marginBottom: 30},
});

export default App;
