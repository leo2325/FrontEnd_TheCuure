// Components/Search.js
import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class ConnectUser extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>

        <TextInput style={styles.textinput} selectionColor={'#EFA000'} placeholder='Login'/>
        <TextInput style={styles.textinput} selectionColor={'#EFA000'} placeholder='Password'/>
        <Button style={styles.button} title='Se connecter' onPress={() => {}}/>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: '#EFA000'
  },
  textinput: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    height: 50,
    backgroundColor: 'white',
    borderColor: '#EFA000',
    borderRadius: 10,
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default ConnectUser
