import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { ScrollView, FlatList } from 'react-native-gesture-handler'
import FavoriteCard from '../components/FavoriteCard'
import ScreenLayout from '../components/ScreenLayout'
import { QuotesContext } from '../contexts/QuotesContext'

const FavoritesScreen = () => {
  const { favorites } = useContext(QuotesContext)
  return (
    <ScreenLayout>
      <FlatList
        contentContainerStyle={{ margin: 10 }}
        data={favorites}
        renderItem={(info) => (
          <View style={{ marginBottom: 10 }}>
            <FavoriteCard quote={info.item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No favorites so far</Text>}
      />
    </ScreenLayout>
  )
}

export default FavoritesScreen
