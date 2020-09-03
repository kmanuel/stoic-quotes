import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import AuthorsScreen from './src/screens/AuthorsScreen'
import HomeScreen from './src/screens/HomeScreen'
import FavoritesScreen from './src/screens/FavoritesScreen'
import QuotesContextProvider from './src/contexts/QuotesContext'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsScreen from './src/screens/SettingsScreen'
import { PURPLE } from './src/constants/colors'
import { initialize } from './src/services/initialization-service'
import { HEADER_HEIGHT } from './src/components/Header'
import { STATUS_BAR_HEIGHT } from './src/components/ScreenLayout'
import AdBanner from './src/components/AdBanner'

const Drawer = createDrawerNavigator()

const DrawerIcon = ({ iconName }: { iconName: string }) => {
  return (
    <View style={{ width: 30 }}>
      <Icon name={iconName} size={20} color="#999" />
    </View>
  )
}

export default function App() {
  useEffect(() => {
    initialize()
  }, [])

  return (
    <View style={styles.container}>
      <QuotesContextProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContentOptions={{
              activeTintColor: PURPLE,
            }}
            initialRouteName="Home"
            drawerStyle={{
              width: '60%',
              marginTop: HEADER_HEIGHT + STATUS_BAR_HEIGHT,
            }}
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
