import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, AsyncStorage } from 'react-native'
import ScreenLayout from '../components/ScreenLayout'

import { sendNotificationImmediately } from '../services/notificationService'

const fireNotification = () => {
  sendNotificationImmediately({
    author: 'foo',
    favorite: false,
    id: 1,
    lastSeen: null,
    text: `backgroundfetch execution at ${new Date()}`,
  })
}

const SettingsScreen = () => {
  const handleReset = () => {
    AsyncStorage.removeItem('@quotes')
  }

  return (
    <ScreenLayout>
      <TouchableOpacity onPress={handleReset}>
        <Text>Reset</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={{ padding: 20, marginTop: 30, backgroundColor: 'green' }}
          onPress={fireNotification}
        >
          <Text>Fire</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  )
}

export default SettingsScreen
