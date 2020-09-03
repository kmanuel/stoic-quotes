import React from 'react'
import { IAuthor, getPictureSource } from '../types/IAuthor'
import { Image, View } from 'react-native'

const CustomImage = ({ width = 100, author }) => {
  const source = getPictureSource(author)
  return (
    <View
      style={{
        width: width,
        height: 0.8 * width,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        source={source}
        style={{ width: 100, height: 100, resizeMode: 'stretch' }}
      />
    </View>
  )
}

type AuthorImageProps = {
  author: IAuthor
  width?: number
}

const AuthorImage = ({ width = 100, author }: AuthorImageProps) => {
  if (!author) {
    return null
  }
  return <CustomImage author={author} width={width} />
}

export default AuthorImage
