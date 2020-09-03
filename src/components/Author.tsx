import React from 'react'
import { Text } from 'react-native-elements'
import { View, Image } from 'react-native'
import AuthorImage from './AuthorImage'

const authorData = {
  'Marcus Aurelius': {
    name: 'Marcus Aurelius',
    image: (
      <Image
        source={require('../../assets/Aurelius.jpg')}
        style={{ width: 50, height: 50 }}
      />
    ),
    subtitle: 'Roman Emperor',
  },
  'Lucius Annaeus Seneca': {
    name: 'Lucius Annaeus Seneca',
    image: (
      <Image
        source={require('../../assets/seneca.jpeg')}
        style={{ width: 50, height: 50 }}
      />
    ),
    subtitle: 'Roman Philosopher',
  },
  Epictetus: {
    name: 'Epictetus',
    image: (
      <Image
        source={require('../../assets/epictetus.png')}
        style={{ width: 50, height: 50 }}
      />
    ),
    subtitle: 'Philosopher',
  },
}

const Author = ({ author }: { author: string }) => {
  const authorObj = authorData[author]
  if (!authorObj) {
    return null
  }

  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <AuthorImage author={authorObj} width={80} />
      <View
        style={{
          flexGrow: 1,
          marginLeft: 10,
          borderBottomWidth: 2,
          borderColor: '#aaa',
        }}
      >
        <Text h4>{author}</Text>
        <Text style={{ marginTop: -4 }}>{authorObj.subtitle}</Text>
      </View>
    </View>
  )
}
export default Author
