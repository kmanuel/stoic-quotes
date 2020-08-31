import React from 'react'
import { Text } from 'react-native-elements'
import { View, Image } from 'react-native'

const authorData = {
  'Marcus Aurelius': {
    image: (
      <Image
        source={require('../../assets/Aurelius.jpg')}
        style={{ width: 50, height: 50 }}
      />
    ),
    subtitle: 'Roman Emperor',
  },
  'Lucius Annaeus Seneca': {
    image: (
      <Image
        source={require('../../assets/seneca.jpeg')}
        style={{ width: 50, height: 50 }}
      />
    ),
    subtitle: 'Roman Philosopher',
  },
  Epictetus: {
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
  console.log('getting data for author', author)
  console.log('authorData is', authorData[author])

  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View
        style={{ width: 50, height: 50, borderRadius: 5, overflow: 'hidden' }}
      >
        {authorObj.image}
      </View>
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
