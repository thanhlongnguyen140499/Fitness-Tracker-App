import { Dimensions, StyleSheet, View } from 'react-native';
import React, { memo, useState } from 'react';
import { TabBar, TabView } from 'react-native-tab-view';
import LikesMedia from './LikesMedia';
import PhotoMedia from './PhotoMedia';

const Media = () => {
    const [tabBarIndex, setTabBarIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Photos' },
        { key: 'second', title: 'Likes' },
    ]);
    const width = Dimensions.get('window').width;

    const renderScene = ({ route }: { route: { key: string } }) => {
        switch (route.key) {
            case 'first':
                return <PhotoMedia />;
            case 'second':
                return <LikesMedia />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <TabView
                swipeEnabled
                navigationState={{ index: tabBarIndex, routes }}
                renderScene={renderScene}
                onIndexChange={setTabBarIndex}
                initialLayout={{ width }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        activeColor="#fff"
                        inactiveColor="gray"
                        style={{ backgroundColor: 'transparent' }}
                    />
                )}
            />
        </View>
    );
};

export default memo(Media);

const styles = StyleSheet.create({
    container: {
        height: 700,
        backgroundColor: 'transparent',
        padding: 10,
        margin: 10,
    },
});