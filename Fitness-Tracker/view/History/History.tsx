import { StyleSheet, Text, SafeAreaView, ScrollView, Image, View } from 'react-native'
import React, { memo, useState } from 'react'
import AppHorizontalCalendar from '@/components/CustomComponents/AppHorizontalCalendar/AppHorizontalCalendar'
import moment from 'moment'
import { Colors } from '@/constants/Colors'
import TrainingCourse from '@/components/Training/TrainingCourse'
import AppText from '@/components/CustomComponents/AppText/AppText'
import { customAppTextStyle } from '@/components/CustomComponents/AppText/style'

const History = () => {
    const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'))

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ padding: 10 }}>

                <AppHorizontalCalendar onSelectDate={setSelectedDate} selected={selectedDate} />

                <View style={{ borderRadius: 10, marginTop: 20 }}>
                    <Image source={require('../../assets/images/background.jpg')} height={300}
                        resizeMethod='scale' style={{ width: '100%', height: 300, borderRadius: 10 }}
                    />
                </View>

                {/* Training */}
                <AppText style={[customAppTextStyle.largeText, { color: Colors.primary }]}>STRENGTH</AppText>
                <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.verticalHorizontalItem]}>
                    <AppText style={styles.indexText}>22-28 min</AppText>
                    <AppText style={styles.indexText}>Core, Lower, Legs</AppText>
                    <AppText style={[styles.indexText]}>Dumpbell</AppText>
                </View>

                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <TrainingCourse />
                    <TrainingCourse />
                    <TrainingCourse />
                    <TrainingCourse />
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default History

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
        color: Colors.light.background,
    }
})