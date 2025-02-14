import { View, Text, StyleProp, TextStyle, TextProps } from 'react-native'
import React, { memo } from 'react'
import { customAppTextStyle } from './style'

const AppText = ({
  style,
  children,
  ...restProps
}: TextProps) => {
  return (
      <Text style={[customAppTextStyle.baseText, style]} {...restProps}>{children}</Text>
  )
}

export default memo(AppText)