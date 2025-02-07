import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import moment, { Moment } from 'moment'
import Date from './Date'

interface AppHorizontalCalendarProps {
    onSelectDate: (date: string) => void;
    selected: string;
}

const AppHorizontalCalendar: FC<AppHorizontalCalendarProps> = ({
    onSelectDate,
    selected
}) => {
    const [dates, setDates] = useState<Moment[]>([]);

    const getDates = useCallback(() => {
        const _dates: Moment[] = [];
        for (let i = 0; i < 10; i++) {
            const date = moment().add(i, 'days');
            _dates.push(date);
        }
        setDates(_dates);
    }, []);

    useEffect(() => {
        getDates();
    }, [])

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            {
                dates.map((date, index) => (
                    <Date
                        key={index}
                        date={date.format()}
                        onSelectDate={onSelectDate}
                        selected={selected}
                    />
                ))
            }
        </ScrollView>
    )
}

export default memo(AppHorizontalCalendar)

const styles = StyleSheet.create({})