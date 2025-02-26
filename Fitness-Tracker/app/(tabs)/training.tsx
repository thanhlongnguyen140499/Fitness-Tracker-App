import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'
import React, { memo } from 'react'
import BodyParts from '@/view/BodyParts/BodyParts'
import AppText from '@/components/CustomComponents/AppText/AppText'
import { customAppTextStyle } from '@/components/CustomComponents/AppText/style'
import Equipments from '@/view/Equipments/Equipments'

const training = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AppText style={[customAppTextStyle.hugeText, styles.verticalHorizontalItem]}>Body Part</AppText>
        <BodyParts />

        <AppText style={[customAppTextStyle.hugeText, styles.verticalHorizontalItem]}>Equipment</AppText>
        <Equipments />
      </ScrollView>
    </SafeAreaView>
  )
}

export default memo(training)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    height: '100%',
  },
  verticalHorizontalItem: {
    marginVertical: 10,
  },
})