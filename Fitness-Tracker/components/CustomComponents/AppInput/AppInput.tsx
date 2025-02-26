import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { memo } from 'react'

const AppInput = ({
    style,
    placeholder = 'Enter text...',
    ...restProps
}: TextInputProps) => {
    return (
        <TextInput
            style={[{ padding: 10, borderRadius: 5, backgroundColor: '#fff' }, style]}
            placeholder={placeholder}
            {...restProps}
        />
    )
}

export default memo(AppInput)

const styles = StyleSheet.create({})