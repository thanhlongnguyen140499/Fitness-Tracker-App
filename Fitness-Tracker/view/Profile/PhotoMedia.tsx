import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { memo, useCallback } from 'react'
import { PHOTO_MEDIA } from '@/constants/Images'

const width = Dimensions.get('window').width;

const PhotoMedia = () => {
  const renderItem = useCallback(({ item }: { item: { title: string, source: string, id: string } }) => {
    return (
      <View style={styles.row}>
        <Image
          resizeMode='cover'
          source={{
            uri: item.source,
            width: width / 3 - 30,
            height: 150
          }}
          style={{
            borderRadius: 10,
          }}
          />
      </View>

    )
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        data={PHOTO_MEDIA}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.id}
        columnWrapperStyle={{ justifyContent: 'flex-start' }}
      />
    </View>
  )
}

export default memo(PhotoMedia)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    maxWidth: width / 3 - 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
  }
})