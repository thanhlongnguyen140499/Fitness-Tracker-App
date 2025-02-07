import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { FC, memo } from 'react'
import moment from 'moment'

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
        <View style={[{}]}>
            <Text
                style={[styles.big, { color: "#444" }, selected === fullDate && { color: "#fff" }]}
            >
                {day}
            </Text>
            <TouchableOpacity
                onPress={() => onSelectDate(fullDate)}
                style={[styles.card, selected === fullDate && { backgroundColor: "#FFA500" }]}
            >
                <View style={{ height: 10 }} />
                <Text
                    style={[
                        styles.medium,
                        selected === fullDate && { color: "#fff", fontWeight: 'bold' },
                    ]}
                >
                    {dayNumber}
                </Text>
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