import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class FruitDetails extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
          <Image
            style={styles.image}
             source={fruit.poster_path}
          />
          <View style={styles.content_container}>
            <View style={styles.header_container}>
              <Text style={styles.title_text}>{fruit.title}</Text>
            </View>
            <View style={styles.description_container}>
              <Text style={styles.description_text}>{fruit.overview}</Text>
              <Text style={styles.description_text}>{fruit.benefits}</Text>
            </View>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  }
})

export default FruitDetails
