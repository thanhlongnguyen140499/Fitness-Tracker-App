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
    const barWidth = 5;
    const xTitles: string[] = ['12AM', '11AM', '10AM', '9AM', '8AM', '7AM', '6AM', '5AM', '4AM', '3AM', '2AM', '1AM', '12PM', '11PM', '10PM', '9PM', '8PM', '7PM', '6PM', '5PM', '4PM', '3PM', '2PM', '1PM', '12PM'];

    const xScale = scaleBand()
        .domain(data.map((d) => d.time))
        .range([margin.left, width - margin.right])
        .padding(0.5);

    const yScale = scaleLinear()
        .domain([0, Math.max(...data.map((d) => d.value))])
        .range([height - margin.bottom, margin.top]);

    return (
        <View style={{ width: width, height: height, marginLeft: 8 }}>
            <Svg width={width} height={height}>
                {/* Background Grid */}
                {
                    xTitles.map((label, index) => {
                        const x = (width / 45) * index;

                        if (label === '12AM' || label === '6AM' || label === '12PM' || label === '6PM') {
                            return (
                                <Line key={index} x1={x} y1={margin.top} x2={x} y2={height} stroke="#444" strokeWidth={2} />
                            );
                        } else if (index === 1 || index === 7 || index === 13 || index === 19) {
                            return (
                                <React.Fragment key={index}>
                                    <Line x1={x} y1={margin.top} x2={x} y2={height - margin.bottom} stroke="#444" strokeWidth={1} />
                                    <SvgText x={x + 15} y={height} fill="#999" fontSize="10" textAnchor="middle">
                                        {xTitles[index - 1]}
                                    </SvgText>
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <Line key={index} x1={x} y1={margin.top} x2={x} y2={height - margin.bottom} stroke="#444" strokeWidth={1} />
                            );
                        }
                    })
                }
                {/* Bars */}
                {data.map((d, index) => (
                    <Rect
                        key={index}
                        // x={(xScale(d.time) ?? 0) - barWidth / 2}
                        // y={yScale(d.value)}
                        x={50 + (width / 25) * index}
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
