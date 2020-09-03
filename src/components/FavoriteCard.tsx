import React, { useContext } from 'react'
import { View, Text, Share } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { IQuote } from '../services/quoteService'
import { colors } from 'react-native-elements'
import { PINK, SECONDARY, COMPLEMENT_GREEN, PAPER } from '../constants/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { QuotesContext } from '../contexts/QuotesContext'
import AppText from './AppText'
import AuthorImage from './AuthorImage'

type Props = {
  quote: IQuote
}

const FavoriteCard = ({ quote }: Props) => {
  const { toggleFavorite } = useContext(QuotesContext)

  const onToggleFavorite = () => {
    toggleFavorite(quote.id)
  }

  const onShare = () => {
    Share.share({
      message: `"${quote.text}" - ${quote.author}`,
      title: `${quote.author} via Stoic App`,
    })
      .then(this._showResult)
      .catch((error) => this.setState({ result: 'error: ' + error.message }))
  }

  return (
    <View
      style={{
        backgroundColor: PAPER,
        padding: 10,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flex: 3 }}>
        <AppText leading="large">{quote.text}</AppText>
        <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row' }}>
          <AuthorImage author={{ name: quote.author }} width={50} />
          <AppText type="secondary" style={{ marginTop: 10, marginLeft: 10 }}>
            {quote.author}
          </AppText>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 0,
        }}
      >
        <TouchableOpacity onPress={onToggleFavorite}>
          <Icon name="bookmark" size={28} color={PINK} />
        </TouchableOpacity>

        <TouchableOpacity onPress={onShare}>
          <Icon name="share-alt" size={28} color={COMPLEMENT_GREEN} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FavoriteCard
