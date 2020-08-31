import React from 'react'
import { View, Text, Image } from 'react-native'
import { GREY } from '../constants/colors'

type AuthorCardProps = {
  author: {
    name: string
    imagePath: string
  }
}

const imageSources = {
  'Marcus Aurelius': require('../../assets/Aurelius.jpg'),
  'Lucius Annaeus Seneca': require('../../assets/seneca.jpeg'),
  Epictetus: require('../../assets/epictetus.png'),
  'Zeno of Citium': require('../../assets/zeno.jpg'),
  'Gaius Musonius Rufus': require('../../assets/zeno.jpg'),
  Chrysippus: require('../../assets/chrysippos.jpg'),
  Hierocles: require('../../assets/zeno.jpg'),
}

const CustomImage = ({ authorName }) => {
  const source = imageSources[authorName]

  return (
    <Image
      source={source}
      style={{ width: 100, height: 100, resizeMode: 'cover' }}
    />
  )
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <View
      style={{
        borderRadius: 5,
        overflow: 'hidden',
        width: 100,
        backgroundColor: GREY,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <View style={{ width: 100, height: 100 }}>
        <CustomImage authorName={author.name} />
      </View>
      <View style={{ paddingTop: 5, paddingBottom: 10, paddingHorizontal: 5 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
          {author.name}
        </Text>
      </View>
    </View>
  )
}

export default AuthorCard
