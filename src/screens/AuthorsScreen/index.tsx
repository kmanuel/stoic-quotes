import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthorsHomeScreen from './AuthorsHomeScreen'
import AuthorDetailScreen from './AuthorDetailScreen'
import { PURPLE } from '../../constants/colors'
import { IAuthor } from '../../types/IAuthor'

export type RootStackParamList = {
  AuthorsHome: undefined
  AuthorDetailScreen: { author: IAuthor }
}

const Stack = createStackNavigator<RootStackParamList>()

const AuthorsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthorsHome"
        component={AuthorsHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthorDetailScreen"
        component={AuthorDetailScreen}
        options={({ route }) => ({
          title: route.params.author.name,
          headerStyle: { backgroundColor: PURPLE },
          headerTitleStyle: { color: 'white' },
          headerBackTitleStyle: { color: 'white' },
        })}
      />
    </Stack.Navigator>
  )
}

export default AuthorsStackScreen
