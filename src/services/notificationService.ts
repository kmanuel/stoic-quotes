import * as Permissions from 'expo-permissions'
import { Notifications } from 'expo'
import { IQuote } from './quoteService'

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

export const sendNotificationImmediately = async (quote: IQuote) => {
  console.log('fire notification')
  await askPermissions()
  let notificationId = await Notifications.scheduleLocalNotificationAsync(
    {
      title: `${quote.author}:`,
      body: quote.text,
    },
    {
      time: new Date().getTime() + 5000,
    }
  )
  console.log(notificationId) // can be saved in AsyncStorage or send to server
}
