import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import Divider from '@/components/Divider'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DEFAULT_ICON_SIZE, DEVICE_WIDTH } from '@/constants/Gutter'
import { ProgressChart } from 'react-native-chart-kit'
import { Colors } from '@/constants/Colors'
import { RING_CHART_CONFIG } from '@/constants/Charts'
import AppBarChart from '@/components/AppBarChart'

const index = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.2, 0.7, 0.6],
    colors: [Colors.standColor, Colors.exerciseColor, Colors.moveColor]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        {/* Header */}
        <View style={styles.marginContainer}>
          <Text style={[styles.text]}>Mon, JUN 10</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.text, {
              fontSize: 30,
              fontWeight: 'bold'
            }]}>Summary</Text>
            <Image source={require('../../assets/images/avatar.jpg')}
              style={{ width: 40, height: 40, borderRadius: 25 }}
            />
          </View>
        </View>

        {/* Content */}
        {/* 1. Activity Rings */}
        <View style={[styles.marginContainer, styles.ringChartContainer]}>
          <Text style={[styles.text, styles.boxTitle]}>Activity Rings</Text>
          <Divider width={0.2} dividerStyle={{ backgroundColor: 'gray' }} />

          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <ProgressChart
              data={data}
              width={DEVICE_WIDTH / 2}
              height={150}
              strokeWidth={12}
              radius={35}
              chartConfig={RING_CHART_CONFIG}
              hideLegend={true}
              withCustomBarColorFromData={true}
            />
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', paddingVertical: 10 }}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, styles.contentTitle]}>Move</Text>
                <Text style={[styles.text, styles.contentNumber, { color: Colors.moveColor }]}>479/800CAL</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, styles.contentTitle]}>Exercise</Text>
                <Text style={[styles.text, styles.contentNumber, { color: Colors.exerciseColor }]}>50/30MIN</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.text, styles.contentTitle]}>Stand</Text>
                <Text style={[styles.text, styles.contentNumber, { color: Colors.standColor }]}>3/12HRS</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 2. Step Calculator */}
        <View style={[styles.marginContainer, styles.stepContainer]}>
          <View style={styles.stepBox}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[styles.text, styles.boxTitle]}>Step Count</Text>
              <MaterialCommunityIcons name={"chevron-right"} color={'green'} size={DEFAULT_ICON_SIZE} />
            </View>

            <Divider width={0.2} dividerStyle={{ backgroundColor: 'gray' }} />
          </View>
          <View style={styles.stepBox}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text style={[styles.text, styles.boxTitle]}>Step Distance</Text>
              <MaterialCommunityIcons name={"chevron-right"} color={'green'} size={DEFAULT_ICON_SIZE} />
            </View>
            <Divider width={0.2} dividerStyle={{ backgroundColor: 'gray' }} />
          </View>
        </View>

        {/* 3. Trends */}
        <View style={[styles.marginContainer, styles.trendContainer]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[styles.text, styles.boxTitle]}>Trends</Text>
            <MaterialCommunityIcons name={"chevron-right"} color={'green'} size={DEFAULT_ICON_SIZE} />
          </View>
          <Divider width={0.2} dividerStyle={{ backgroundColor: 'gray' }} />
          <AppBarChart data={[
            { time: "12AM", value: 10 },
            { time: "6AM", value: 15 },
            { time: "12PM", value: 15 },
            { time: "6PM", value: 20 },
          ]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  text: {
    color: '#ffffff',
  },
  boxTitle: {
    fontSize: 20,
    fontWeight: '500',
    padding: 10,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: '400',
  },
  contentNumber: {
    fontSize: 22,
    fontWeight: '500',
  },
  marginContainer: {
    marginVertical: 5,
  },
  ringChartContainer: {
    backgroundColor: '#1F1F1F',
    height: 225,
    borderRadius: 20,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 225,
  },
  stepBox: {
    backgroundColor: '#1F1F1F',
    width: '48%',
    borderRadius: 20,
  },
  trendContainer: {
    backgroundColor: '#1F1F1F',
    height: 225,
    borderRadius: 20,
  }
})