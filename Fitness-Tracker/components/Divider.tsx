import { View } from 'react-native'
import React, { FC, memo } from 'react'

interface DivierProps {
    width?: number
    orientation?: 'horizontal' | 'vertical'
    color?: string
    dividerStyle?: any
}

const Divider: FC<DivierProps> = ({
    width = 1,
    orientation = 'horizontal',
    color = '#DFE4EA',
    dividerStyle,
}) => {
    const dividerStyles = [
        { width: orientation === 'horizontal' ? '100%' : width },
        { height: orientation === 'vertical' ? '100%' : width },
        { backgroundColor: color },
        dividerStyle,
    ]

    return (
        <View style={dividerStyles} />
    )
}

export default memo(Divider)
