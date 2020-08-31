import React from 'react'
import { View } from 'react-native'
import AuthorCard from '../components/AuthorCard'
import ScreenLayout from '../components/ScreenLayout'
import authorData from '../data/authors.json'

const AuthorsScreen = () => {
  return (
    <ScreenLayout>
      <View
        style={{
          paddingHorizontal: 10,
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 20,
        }}
      >
        {authorData.map((a) => (
          <AuthorCard key={a.name} author={a} />
        ))}
      </View>
    </ScreenLayout>
  )
}

export default AuthorsScreen
