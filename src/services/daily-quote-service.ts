import { AsyncStorage } from 'react-native'
import * as Permissions from 'expo-permissions'
import * as Notifications from 'expo-notifications'
import { loadQuotes, IQuote } from './quoteService'

const DAILY_QUOTE_KEY = '@dailyQuote'

export const askPermissions = async () => {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  )
  let finalStatus = existingStatus
  if (existingStatus !== 'granted') {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS)
    finalStatus = status
  }
  if (finalStatus !== 'granted') {
    return false
  }
  return true
}

export const isDailyQuoteEnabled = async () => {
  const res = await AsyncStorage.getItem(DAILY_QUOTE_KEY)
  return !!res
}

export const disableDailyQuotes = async () => {
  AsyncStorage.setItem(DAILY_QUOTE_KEY, JSON.stringify(false))
  Notifications.cancelAllScheduledNotificationsAsync()
}

export const enableDailyQuotes = async () => {
  AsyncStorage.setItem(DAILY_QUOTE_KEY, JSON.stringify(true))
  await askPermissions()
  await disableDailyQuotes()
  const quotes = await loadQuotes()
  const thirtyQuotes = quotes.slice(0, 30)
  thirtyQuotes.forEach((q, idx) => {
    fireQuoteIn(q, idx)
  })
}

const fireQuoteIn = (quote: IQuote, days: number) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: `From ${quote.author}:`,
      body: quote.text,
    },
    trigger: {
      seconds: 60 * 60 * 24 * days,
    },
  })
}
