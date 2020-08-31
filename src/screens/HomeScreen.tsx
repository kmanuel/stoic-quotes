import React, { useContext, useState, useEffect } from 'react'
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Quote from '../components/Quote'
import QuoteBar from '../components/QuoteBar'
import ScreenLayout from '../components/ScreenLayout'
import { QuotesContext } from '../contexts/QuotesContext'
import { PURPLE } from '../constants/colors'
import { setQuoteLastSeen } from '../services/quoteService'

const HomeScreen = () => {
  const { quotes } = useContext(QuotesContext)
  const [itemIdx, setItemIdx] = useState(1)

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const xOffset = event.nativeEvent.contentOffset.x
    const idx = Math.round(xOffset / Dimensions.get('window').width)
    if (idx !== itemIdx) {
      setItemIdx(idx)
    }
  }

  useEffect(() => {
    if (quotes && quotes.length >= itemIdx) setQuoteLastSeen(quotes[itemIdx].id)
  }, [itemIdx])

  return (
    <ScreenLayout>
      <FlatList
        data={quotes}
        horizontal={true}
        snapToInterval={Dimensions.get('window').width}
        onScroll={handleScroll}
        decelerationRate="fast"
        renderItem={(item) => (
          <View style={{ width: Dimensions.get('window').width }}>
            <Quote quote={item.item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ backgroundColor: PURPLE, width: '100%' }}>
        <QuoteBar currentItem={itemIdx + 1} totalItems={quotes.length} />
      </View>
    </ScreenLayout>
  )
}

export default HomeScreen
