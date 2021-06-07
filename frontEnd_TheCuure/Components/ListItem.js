import React from 'react'
import fruits from '../Helpers/itemsData'
import FruitItem from './FruitItem'


import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native'

class ListItem extends React.Component {


  _displayDetailForFruit = (idfruit, titlefruit, ) => {
    /* renvoie le Fruit id dans le temrinal - ok */
    console.log("Display Fruit id " + idfruit)
    /* ligne de code qui va afficher la vue FruitDetail

          this.props.navigation.navigate('FruitDetail')

      TypeError: Undefined is not an object (evaluating '_this.props.navigation.navigate')*/
}


  render() {
    console.log("RENDER")
    /* Depuis que l'on a ajouté notre vue Search à notre StackNavigator, quelque chose a changé dans ses props.
       Ajoutez un log dans le render du component Search, vous allez voir :

       Devrait afficher les objects {} dans le terminal (il est vide)
       Ai-je bien suivi la consigne plus haut ? */
    console.log(this.props)
    return (
      <View style={styles.main_container}>
        <FlatList
          data={fruits}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <FruitItem fruit={item} displayDetailForFruit={this._displayDetailForFruit}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 25,
  }
})

export default ListItem
