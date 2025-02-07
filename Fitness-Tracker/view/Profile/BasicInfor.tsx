import { Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { IconSymbol } from '@/components/ui/IconSymbol'
import Svg, { Path } from 'react-native-svg'
import { DefaultTheme } from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const HEIGHT = 250;
const curveRadius = 50; // Curve depth

const BasicInfor = () => {
    return (
        <View style={styles.container}>
            {/* Background Container */}
            <View style={styles.backgroundContainer}>
                <Image
                    source={{ uri: "https://t3.ftcdn.net/jpg/04/29/35/62/240_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg" }}
                    style={{
                        width: width,
                        height: height / 3,
                    }}
                />
                <Svg style={{
                    position: "absolute",
                    top: height / 3 - curveRadius,
                }} width={width} height={70} viewBox={`0 0 ${width} ${70}`}>
                    <Path
                        d={`
            M 0,50 
            H ${(width - curveRadius * 4) / 2} 
            Q ${width / 2},0 ${(width + curveRadius * 4) / 2},50 
            H ${width}
          `}
                        stroke={DefaultTheme.colors.background}
                        strokeWidth="0"
                        fill="#000000"
                    />
                </Svg>
            </View>

            {/* Avatar */}
            <View style={[styles.avatarContainer]}>
                <Image
                    source={{
                        uri: "https://randomuser.me/api/portraits/women/44.jpg", // Replace with your avatar
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Profile Info */}
            <Text style={styles.name}>Melissa Peters</Text>
            <Text style={styles.title}>Interior Designer</Text>
            <Text style={styles.location}>📍 Lagos, Nigeria</Text>

            {/* Network */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.text, styles.numbers]}>1.2M</Text>
                    <Text style={[styles.text]}>Followers</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.text, styles.numbers]}>1.2M</Text>
                    <Text style={[styles.text]}>Following</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[styles.text, styles.numbers]}>1.2M</Text>
                    <Text style={[styles.text]}>Friends</Text>
                </View>
            </View>

            {/* Actions */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <TouchableOpacity
                    style={styles.actionButton}
                >
                    <Text style={[styles.text]}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.actionButton}
                >
                    <Text style={[styles.text]}>Add Friends</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default memo(BasicInfor)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#000000',
        position: "relative",
    },
    text: {
        color: '#ffffff',
    },
    backgroundContainer: {
        overflow: "hidden",
    },
    backgroundImage: {
        width: "100%",
    },
    curve: {
        position: "absolute",
        bottom: 0,
    },
    avatarContainer: {
        position: "absolute",
        top: HEIGHT + 50,
        borderRadius: 50,
        padding: 5,
        backgroundColor: "#fff",
        elevation: 5, // Shadow on Android
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        marginTop: 120,
        fontSize: 22,
        fontWeight: "bold",
        color: "#fff",
    },
    title: {
        fontSize: 16,
        color: "gray",
        paddingVertical: 4,
    },
    location: {
        fontSize: 14,
        marginTop: 4,
        color: "gray",
        paddingVertical: 4,
    },
    numbers: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 20,
        color: "#fff",
    },
    actionButton: {
        backgroundColor: "purple",
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        marginHorizontal: 5,
    }
})