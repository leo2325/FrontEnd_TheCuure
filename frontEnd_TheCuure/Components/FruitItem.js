import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'

class FruitItem extends React.Component {

  render() {
    const { fruit, displayDetailForFruit } = this.props
    return (

      <TouchableOpacity
      style={styles.main_container}
      /* Appel de la fonction au click
         redirection vers la vue Fruit Detail*/
      onPress={() => displayDetailForFruit(fruit.id)}>

        <Image
          style={styles.image}
           source={fruit.poster_path}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>{fruit.title}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text}>numberOfLines={6}>{fruit.overview}</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 130,
    flexDirection: 'row',
    padding: 5,
    marginBottom: 10
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    borderRadius: 100
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  }
})

export default FruitItem
