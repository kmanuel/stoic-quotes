import React from 'react'
import { View, Text } from 'react-native'
import AuthorImage from './AuthorImage'
import { IAuthor } from '../types/IAuthor'

type AuthorCardProps = {
  author: IAuthor
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <View
      style={{
        borderRadius: 5,
        overflow: 'hidden',
        width: 100,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AuthorImage author={author} />
      <Text style={{ marginTop: 5, textAlign: 'center', fontWeight: 'bold' }}>
        {author.name}
      </Text>
    </View>
  )
}

export default AuthorCard
