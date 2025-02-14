import { Colors } from "@/constants/Colors";
import { METRICS_SIZE } from "@/constants/Text";
import { StyleSheet } from "react-native";

const baseText = {
    color: Colors.text,
}

export const customAppTextStyle = StyleSheet.create({
    tinyText: {
        ...baseText,
        fontSize: METRICS_SIZE.tiny,
        fontWeight: '300',
    },
    baseText: {
        ...baseText,
        fontSize: METRICS_SIZE.regular,
        fontWeight: '500',
    },
    largeText: {
        ...baseText,
        fontSize: METRICS_SIZE.large,
        fontWeight: '700',
    },
    hugeText: {
        ...baseText,
        fontSize: METRICS_SIZE.huge,
        fontWeight: '900',
    },
})