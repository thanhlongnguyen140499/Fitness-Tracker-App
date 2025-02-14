import { Image, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/constants/Gutter';
import { useVideoPlayer, VideoView, VideoViewProps } from 'expo-video';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
import { useEventListener } from 'expo';
import { Colors } from '@/constants/Colors';

const CourseDetails = () => {
	const source = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
	const assetId = require('../assets/videos/courseDetails.mp4');
	const videoStyles = useVideoStyles();
	const player = useVideoPlayer(assetId, player => {
		player.loop = true;
		player.play();
		player.timeUpdateEventInterval = 0.1;
	});
	const [progressPercent, setProgressPercent] = useState<number>(0);

	useEventListener(player, 'timeUpdate', () => {
		setProgressPercent(player.currentTime / player.duration);
	});

	return (
		<View style={{ flex: 1 }}>
			{/* Absolute view */}
			<TouchableOpacity style={[{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 70, left: 15, zIndex: 2 }]} onPress={() => router.back()}>
				<MaterialCommunityIcons name="close" size={35} color="white" />
				<Text style={[styles.text, styles.title]}>Training</Text>
			</TouchableOpacity>

			<View style={styles.progressBarContainer}>
				<Progress.Bar progress={progressPercent} width={DEVICE_WIDTH - 20} height={15} color={Colors.tintBackground} />
			</View>

			<View style={[styles.playerContainer]}>
				<TouchableHighlight onPress={() => {}} style={[styles.player]}>
					<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
						<View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
							<Image source={require('../assets/images/fitness/dumbell.jpg')} resizeMethod='auto' style={styles.imagePlayer} />
							<View style={[{ flexDirection: 'column', marginLeft: 10 }]}>
								<Text style={[styles.text, { fontWeight: 'bold' }]}>Next</Text>
								<Text style={[styles.text, { fontWeight: '400' }]}>Elbows to Knees Crunch</Text>
							</View>
						</View>
						<MaterialCommunityIcons name='chevron-right' size={25} color="white" />
					</View>
				</TouchableHighlight>
			</View>

			{/* Video */}
			<VideoView
				player={player}
				nativeControls={false}
				style={videoStyles.container}
				contentFit='cover'
			/>
		</View>
	)
}

export default memo(CourseDetails)

const useVideoStyles = () => {
	return StyleSheet.create({
		container: {
			backgroundColor: 'black',
			height: DEVICE_HEIGHT,
		},
		video: {
			width: "100%",
			height: DEVICE_WIDTH * (9 / 16),
			minHeight: 1080
		},
	});
}

const styles = StyleSheet.create({
	text: {
		color: '#fff'
	},
	progressBarContainer: {
		position: 'absolute',
		bottom: 200, zIndex: 2,
		height: 30, width: '100%',
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	playerContainer: {
		position: 'absolute',
		bottom: 100, zIndex: 2,
		height: 100, width: '100%',
		padding: 10
	},
	player: {
		flex: 1,
		backgroundColor: Colors.tintBackground,
		borderRadius: 20,
		padding: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	imagePlayer: { width: 50, height: 50, borderRadius: 10 },
	title: {
		fontSize: 22,
		fontWeight: '800',
		marginLeft: 5
	},
})