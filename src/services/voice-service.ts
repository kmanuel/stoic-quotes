import { AsyncStorage } from 'react-native'
import * as Speech from 'expo-speech'

const DEFAULT_VOICE = 'en-gb-x-gbd-local'

const VOICE_KEY = '@selected-voice'

export const saveDefaultVoice = () => {
  return AsyncStorage.setItem(VOICE_KEY, DEFAULT_VOICE)
}

export const saveSelectedVoice = (voice: string) => {
  return AsyncStorage.setItem(VOICE_KEY, voice)
}

export const loadSelectedVoice = async (): Promise<string | undefined> => {
  return AsyncStorage.getItem(VOICE_KEY)
}

export const speakText = async (text) => {
  const voiceToUse = await loadSelectedVoice()
  Speech.speak(text, { voice: voiceToUse })
}

export const getAvailableVoices = async () => {
  const voices = await Speech.getAvailableVoicesAsync()
  const englishVoices = voices.filter((v) => v.name.startsWith('en-'))
  return englishVoices
}
