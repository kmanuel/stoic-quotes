import React from 'react'
import { View, Text } from 'react-native'

type QuoteBarProps = {
  currentItem: Number
  totalItems: Number
}

const QuoteBar = ({ currentItem, totalItems }: QuoteBarProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}
    >
      <Text style={{ color: '#fff' }}>All Quotes</Text>
      <Text style={{ color: '#fff' }}>
        {currentItem} of {totalItems}
      </Text>
    </View>
  )
}

export default QuoteBar
