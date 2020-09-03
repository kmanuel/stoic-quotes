import React from 'react'
import { Text } from 'react-native'

const textSizeMappings = {
  small: 14,
  medium: 18,
  large: 22,
}

const leadingMappings = {
  default: 1,
  small: 0.9,
  large: 1.3,
}

const typeMappings = {
  primary: {
    opacity: 1,
  },
  secondary: {
    opacity: 0.6,
  },
}

type AppTextProps = {
  type?: string
  size?: string
  leading?: string
  weight?: string
  style?: any
  children: any
}

const AppText = ({
  type = 'primary',
  size = 'medium',
  leading = 'default',
  weight = 'normal',
  style,
  children,
}: AppTextProps) => {
  return (
    <Text
      style={{
        fontSize: textSizeMappings[size],
        lineHeight: textSizeMappings[size] * leadingMappings[leading],
        opacity: typeMappings[type].opacity,
        fontWeight: weight,
        ...style,
      }}
    >
      {children}
    </Text>
  )
}

export default AppText
