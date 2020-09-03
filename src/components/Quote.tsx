import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import Author from './Author'
import QuoteText from './QuoteText'
import QuoteButtons from './QuoteButtons'
import { IQuote } from '../services/quoteService'

type QuoteProps = {
  quote: IQuote
  styles?: any
}

const Quote = ({ quote, styles }: QuoteProps) => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        flexGrow: 1,
        display: 'flex',
        ...styles,
      }}
    >
      <View style={{ marginTop: 10 }}>
        <Author author={quote.author} />
      </View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 10,
          flexGrow: 1,
          display: 'flex',
        }}
      >
        <View
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <QuoteText text={quote.text} />
        </View>
        <View style={{ marginTop: 10, paddingBottom: 20 }}>
          <QuoteButtons quote={quote} />
        </View>
      </ScrollView>
    </View>
  )
}

export default Quote
