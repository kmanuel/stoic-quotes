import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import AuthorsScreen from './src/screens/AuthorsScreen'
import HomeScreen from './src/screens/HomeScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
import QuotesContextProvider from './src/contexts/QuotesContext'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsScreen from './src/screens/SettingsScreen'
import { PURPLE } from './src/constants/colors'

const Drawer = createDrawerNavigator()

const DrawerIcon = ({ iconName }: { iconName: string }) => {
  return (
    <View style={{ width: 30 }}>
      <Icon name={iconName} size={20} />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <QuotesContextProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContentOptions={{
              activeTintColor: PURPLE,
            }}
            initialRouteName="Home"
            drawerStyle={{ width: '60%', marginTop: 83 }}
          >
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                drawerIcon: ({}) => <DrawerIcon iconName="home" />,
              }}
            />
            <Drawer.Screen
              name="Authors"
              component={AuthorsScreen}
              options={{
                drawerIcon: ({}) => <DrawerIcon iconName="id-card" />,
              }}
            />
            <Drawer.Screen
              name="Favorites"
              component={FavoritesScreen}
              options={{
                drawerIcon: ({}) => <DrawerIcon iconName="bookmark" />,
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                drawerIcon: ({}) => <DrawerIcon iconName="cog" />,
              }}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </QuotesContextProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
