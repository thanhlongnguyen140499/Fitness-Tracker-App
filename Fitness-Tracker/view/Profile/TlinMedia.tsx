import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TlinMedia = () => {
  return (
    <View style={styles.container}>
      <Text>TlinMedia</Text>
    </View>
  )
}

export default TlinMedia

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('screen').width,
    }
})