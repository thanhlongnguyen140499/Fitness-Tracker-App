import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native'
import React, { memo, useState } from 'react'
import AppHorizontalCalendar from '@/components/AppHorizontalCalendar/AppHorizontalCalendar'
import moment from 'moment'
import { Colors } from '@/constants/Colors'

const training = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 10 }}>

        <AppHorizontalCalendar onSelectDate={setSelectedDate} selected={selectedDate} />

        <View style={{ borderRadius: 10, marginTop: 20 }}>
          <Image source={{
            uri: 'https://i.ytimg.com/vi/0xpSOScnr1E/mqdefault.jpg',
          }} height={200}
            resizeMethod='scale'
          />
        </View>

        {/* Training */}
        <Text style={[styles.text, styles.bigText, styles.verticalHorizontalItem]}>STRENGTH</Text>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.verticalHorizontalItem]}>
          <Text style={[styles.indexText]}>22-28 min</Text>
          <Text style={[styles.indexText]}>Core, Lower, Legs</Text>
          <Text style={[styles.indexText]}>Dumpbell</Text>
        </View>

        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <View style={[{ height: 80, backgroundColor: '#444', borderRadius: 10, marginVertical: 5 }]} />
          <View style={[{ height: 80, backgroundColor: '#444', borderRadius: 10, marginVertical: 5 }]} />
          <View style={[{ height: 80, backgroundColor: '#444', borderRadius: 10, marginVertical: 5 }]} />
          <View style={[{ height: 80, backgroundColor: '#444', borderRadius: 10, marginVertical: 5 }]} />
        </View>
      </ScrollView>
      {/* Exercise */}
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
  bigText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  text: {
    color: '#ffffff',
  },
  indexText: {
    color: Colors.exerciseColor,
  }
})