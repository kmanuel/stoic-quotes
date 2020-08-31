import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const QuoteText = ({ text }: { text: string }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 28,
          fontFamily: 'serif',
          fontStyle: 'italic',
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default QuoteText
