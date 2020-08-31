import * as Speech from 'expo-speech'
import React, { useContext } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { QuotesContext } from '../contexts/QuotesContext'
import { IQuote } from '../services/quoteService'
import { GREY, PINK } from '../constants/colors'

type RoundIconButtonProps = {
  iconName: string
  onPress?: () => void
  iconColor?: string
}

const RoundIconButton = ({
  iconName,
  onPress,
  iconColor = '#282828',
}: RoundIconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: 100,
        backgroundColor: GREY,
        height: 60,
        width: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Icon name={iconName} size={28} color={iconColor} />
    </TouchableOpacity>
  )
}

type QuoteButtonProps = {
  quote: IQuote
}

const QuoteButtons = ({ quote }: QuoteButtonProps) => {
  const { toggleFavorite } = useContext(QuotesContext)

  const handleSpeak = () => {
    Speech.speak(quote.text, {
      voice: 'en-us-x-sfg#male_3-local',
      pitch: 0.9,
      rate: 0.9,
    })
  }

  const handleFavoriteQuote = () => {
    toggleFavorite(quote.id)
  }

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      }}
    >
      <RoundIconButton onPress={handleSpeak} iconName="play" />
      <View style={{ marginLeft: 20 }}>
        <RoundIconButton iconName="share-alt" />
      </View>
      <View style={{ marginLeft: 20 }}>
        <RoundIconButton
          iconName="bookmark"
          onPress={handleFavoriteQuote}
          {...(quote.favorite && { iconColor: PINK })}
        />
      </View>
    </View>
  )
}

export default QuoteButtons
