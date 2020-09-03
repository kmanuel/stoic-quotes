import React from 'react'
import { View } from 'react-native'
import AuthorCard from '../../components/AuthorCard'
import ScreenLayout from '../../components/ScreenLayout'
import authorData from '../../data/authors.json'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AuthorsHomeScreen = ({ navigation }) => {
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
          <TouchableOpacity
            key={a.name}
            onPress={() =>
              navigation.navigate('AuthorDetailScreen', { author: a })
            }
          >
            <AuthorCard author={a} />
          </TouchableOpacity>
        ))}
      </View>
    </ScreenLayout>
  )
}

export default AuthorsHomeScreen
