import { AsyncStorage } from 'react-native'
import { enableDailyQuotes, isDailyQuoteEnabled } from './daily-quote-service'
import { saveDefaultVoice } from './voice-service'

const FIRST_START_FLAG_KEY = '@first-start-date'

export const initialize = async () => {
  const firstStart = await isFirstStart()
  if (firstStart) {
    enableDailyQuotes().then(setFirstStartTime)
    saveDefaultVoice()
  }

  const dailyEnabled = await isDailyQuoteEnabled()
  if (dailyEnabled) {
    enableDailyQuotes()
  }
}

const isFirstStart = async () => {
  const isFirstStart = !!(await AsyncStorage.getItem('@first-start-date'))
  return isFirstStart
}

const setFirstStartTime = () => {
  return AsyncStorage.setItem(FIRST_START_FLAG_KEY, JSON.stringify(new Date()))
}
