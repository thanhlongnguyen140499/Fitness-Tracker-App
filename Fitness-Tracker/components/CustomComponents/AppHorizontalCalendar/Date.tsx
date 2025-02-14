import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC, memo } from 'react'
import moment from 'moment'
import AppText from '../AppText/AppText';
import { Colors } from '@/constants/Colors';

interface DateProps {
    date: string;
    onSelectDate: (date: string) => void;
    selected: string;
}

const Date: FC<DateProps> = ({
    date,
    onSelectDate,
    selected
}) => {
    const day = moment(date).format('YYYY-MM-DD') === moment().format('YYYY-MM-DD') ? 'Today' : moment(date).format('ddd')
    const fullDate = moment(date).format('YYYY-MM-DD')
    const dayNumber = moment(date).format('D');

    return (
        <View style={[{ flexDirection: 'column', alignItems: 'center' }]}>
            <AppText style={[styles.big, { color: "#444" }, selected === fullDate && { color: "#fff" }]}>{day}</AppText>
            <TouchableOpacity
                onPress={() => onSelectDate(fullDate)}
                style={[styles.card, selected === fullDate && { backgroundColor: "#FFA500" }]}
            >
                <View style={{ height: 10 }} />
                <AppText
                    style={[
                        styles.medium,
                        selected !== fullDate && { color: Colors.tintBackground },
                    ]}
                >
                    {dayNumber}
                </AppText>
            </TouchableOpacity>
        </View>
    )
}

export default memo(Date)

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#444',
        borderRadius: 20,
        borderColor: '#ddd',
        marginVertical: 10,
        alignItems: 'center',
        height: 35,
        width: 35,
        marginHorizontal: 5,
    },
    big: {
        fontWeight: 'bold',
        fontSize: 12,
    },
    medium: {
        fontSize: 14,
    },
})