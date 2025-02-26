import { StyleSheet, SafeAreaView, ActivityIndicator, FlatList, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import React, { memo } from 'react'
import AppText from '@/components/CustomComponents/AppText/AppText'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { BodyPartType, getAllBodyPart } from '@/myAPI'
import { Colors } from '@/constants/Colors'
import { LinearGradient } from 'expo-linear-gradient'
import { customAppTextStyle } from '@/components/CustomComponents/AppText/style'

const BodyParts = () => {
    // #region fetching data
    const { isLoading, isFetching, data } = useQuery<BodyPartType[]>({
        queryKey: ['bodypart'],
        queryFn: getAllBodyPart,
    })

    // #region state
    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large" color="#ffffff" />
            </SafeAreaView>
        )
    }

    if (isFetching) {
        return (
            <SafeAreaView style={styles.container}>
                <AppText>Fetching...</AppText>
                <ActivityIndicator size="large" color="#ffffff" />
            </SafeAreaView>
        )
    }

    const renderItem = ({ item }: { item: BodyPartType }) => {
        return (
            <TouchableOpacity style={styles.bodyPartItem}>
                <Image
                    resizeMethod='scale'
                    style={styles.bodyPartImageItem}
                    source={{ uri: item.imageBase64 }}
                />

                <LinearGradient
                    start={{ x: 0.5, y: 1 }}
                    end={{ x: 0.5, y: 0.2 }}
                    colors={["rgba(0, 0, 0, 1)", "rgba(59, 4, 4, 0)"]}
                    style={styles.blur}
                />

                <AppText style={[customAppTextStyle.largeText, { padding: 20 }]}>{item.name.toUpperCase()}</AppText>
            </TouchableOpacity>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Body Parts */}
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                horizontal
            />
        </SafeAreaView>
    )
}

export default memo(BodyParts)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        height: '100%',
    },
    bodyPartItem: {
        position: 'relative',
        width: 300,
        height: 250,
        backgroundColor: Colors.tintBackground,
        marginHorizontal: 5,
        borderRadius: 50,
        overflow: 'hidden',
        flexDirection: 'column-reverse',
    },
    bodyPartImageItem: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0,
        bottom: 0,
        flex: 1,
        width: '100%',
        height: '100%'
    },
    blur: {
        flex: 1,
        position: 'absolute',
        top: 0, left: 0,
        right: 0,
        bottom: 0,
    },
});
