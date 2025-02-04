import React, { memo } from "react";
import { View } from "react-native";
import Svg, { Rect, Line, Text as SvgText } from "react-native-svg";
import { scaleLinear, scaleBand } from "d3-scale";

interface BarChartProps {
    data: { time: string; value: number }[];
    width?: number;
    height?: number;
}

const AppBarChart: React.FC<BarChartProps> = ({ data, width = 300, height = 100 }) => {
    const margin = { top: 10, right: 10, bottom: 20, left: 10 };
    const barWidth = 10;
    const xTitles: string[] = ['12AM', '11AM', '10AM', '9AM', '8AM', '7AM', '6AM', '5AM', '4AM', '3AM', '2AM', '1AM', '12PM', '11PM', '10PM', '9PM', '8PM', '7PM', '6PM', '5PM', '4PM', '3PM', '2PM', '1PM'];
    const defaultXTitle: string[] = ['12AM', '6AM', '12PM', '6PM'];

    const xScale = scaleBand()
        .domain(data.map((d) => d.time))
        .range([margin.left, width - margin.right])
        .padding(0.5);

    const yScale = scaleLinear()
        .domain([0, Math.max(...data.map((d) => d.value))])
        .range([height - margin.bottom, margin.top]);

    return (
        <View style={{ backgroundColor: "#1a1a1a", padding: 15, borderRadius: 10 }}>
            <Svg width={width} height={height}>
                {/* Background Grid */}
                {defaultXTitle.map((label, index) => {
                    const x = (width / 4) * index;
                    return (
                        <React.Fragment key={index}>
                            <Line x1={x} y1={margin.top} x2={x} y2={height - margin.bottom} stroke="#444" strokeWidth={1} />
                            <SvgText x={x} y={height} fill="#999" fontSize="10" textAnchor="middle">
                                {label}
                            </SvgText>
                        </React.Fragment>
                    );
                })}

                {/* Bars */}
                {data.map((d, index) => (
                    <Rect
                        key={index}
                        x={(xScale(d.time) ?? 0) - barWidth / 2}
                        y={yScale(d.value)}
                        width={barWidth}
                        height={height - margin.bottom - yScale(d.value)}
                        fill="#a88aff"
                        rx={2}
                    />
                ))}
            </Svg>
        </View>
    );
};

export default memo(AppBarChart);
