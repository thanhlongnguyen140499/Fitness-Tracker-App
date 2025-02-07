import { StyleSheet, View, ScrollView, SafeAreaView, Text } from 'react-native'
import React, { memo } from 'react'
import { useRouter } from 'expo-router'
import Media from '../../view/Profile/Media'
import BasicInfor from '@/view/Profile/BasicInfor'

const profile = () => {
  return (
      <ScrollView style={styles.container}>
        {/* Profile */}
        <BasicInfor />

        {/* Media */}
        <Media />
      </ScrollView>
  )
}

export default memo(profile)

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#000000',
    // height: 500,
  },
})