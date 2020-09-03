import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Switch } from 'react-native-gesture-handler'
import { View, Text, AsyncStorage, Button } from 'react-native'
import ScreenLayout from '../components/ScreenLayout'

import * as Location from 'expo-location'
import { DEVELOPMENT_MODE } from '../constants/toggles'

import { round } from 'react-native-reanimated'
import * as dialyQuoteService from '../services/daily-quote-service'
import VoicePicker from '../components/VoicePicker'
import { hardReset } from '../services/quoteService'

const SettingsScreen = () => {
  const [dailyQuotesEnabled, setDailyQuotesEnabled] = useState(false)

  const determineQuoteToggle = async () => {
    const isRegistered = await dialyQuoteService.isDailyQuoteEnabled()
    setDailyQuotesEnabled(isRegistered)
  }

  useEffect(() => {
    determineQuoteToggle()
  }, [])

  const toggleDailyQuotes = async () => {
    if (!dailyQuotesEnabled) {
      await dialyQuoteService.enableDailyQuotes()
      setDailyQuotesEnabled(true)
    } else {
      dialyQuoteService.disableDailyQuotes()
      setDailyQuotesEnabled(false)
    }
  }

  return (
    <ScreenLayout>
      <View style={{ paddingHorizontal: 10 }}>
        <View style={{ marginTop: 30, display: 'flex', flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Daily Quote Notification
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Switch
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={dailyQuotesEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDailyQuotes}
              value={dailyQuotesEnabled}
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <VoicePicker />
        </View>
        {DEVELOPMENT_MODE && (
          <View style={{ marginTop: 30 }}>
            <Button title="reset" onPress={hardReset} />
          </View>
        )}
      </View>
    </ScreenLayout>
  )
}

export default SettingsScreen
