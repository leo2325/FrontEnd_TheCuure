
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, View, Text, Button } from 'react-native';

import ConnectUser from './Components/ConnectUser'
import ListItem from './Components/ListItem'

import FruitDetail from './Components/FruitDetail'

function HomeScreen({ navigation }) {
  return (
    <>
      {/* Bouton de connexion*/}
      <View style={styles.connect_button}>
        <Button
          title="Se connecter"
          onPress={() => navigation.navigate('Connect')}
        />
      </View>
      {/*Liste des produits*/}
      <ListItem/>
    </>
  );
}

function Connect({ navigation }) {
  return (
    <>
      <ConnectUser/>
    </>
  );
}

function DetailScreen({ navigation }) {
  return (
    <>
      <FruitDetail/>
    </>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Acceuil' }}
        />
        <Stack.Screen
          name="Connect"
          component={ConnectUser}
          options={{ title: 'Connexion' }}
        />
        <Stack.Screen
          name="Detail"
          component={FruitDetail}
          options={{ title: 'Détails Produits' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  connect_button: {
    padding: 10,
    backgroundColor: '#EFA000'
  }
})

export default App
