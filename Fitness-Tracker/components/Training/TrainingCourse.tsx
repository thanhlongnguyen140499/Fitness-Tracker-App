import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { Colors } from '@/constants/Colors'
import AppText from '../CustomComponents/AppText/AppText'
import { customAppTextStyle } from '../CustomComponents/AppText/style'

const TrainingCourse = () => {
    const goToCourseDetails = () => {
        router.navigate('/CourseDetails')
    }

    return (
        <TouchableOpacity onPress={goToCourseDetails} style={styles.container} >
            <Image source={require('../../assets/images/fitness/dumbell.jpg')} resizeMethod='auto' style={{ width: 90, height: 70, borderRadius: 10, marginLeft: 5 }} />
            <View style={{ flex: 1, height: '100%', flexDirection: 'column', justifyContent: 'space-around', marginLeft: 10 }}>
                <AppText style={customAppTextStyle.baseText}>Push up</AppText>
                <AppText style={customAppTextStyle.tinyText}>12 Tutorials * 60 minutes</AppText>
            </View>
            <MaterialCommunityIcons name='chevron-right' color={Colors.light.background} size={32} style={{ marginHorizontal: 5 }} />
        </TouchableOpacity>
    )
}

export default memo(TrainingCourse)

const styles = StyleSheet.create({
    container: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#444',
        borderRadius: 10,
        marginVertical: 5
    }
})