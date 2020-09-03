import React, { useState, useEffect } from 'react'
import { View, Text, Button, Picker } from 'react-native'
import { speakText, getAvailableVoices } from '../services/voice-service'
import * as Speech from 'expo-speech'
import { saveSelectedVoice, loadSelectedVoice } from '../services/voice-service'

const DEMO_QUOTE =
  'If you are pained by external things, it is not they that disturb you, but your own judgement of them.'

const VoicePicker = () => {
  const [voices, setVoices] = useState([])
  const [selectedVoice, setSelectedVoice] = useState('')

  useEffect(() => {
    loadAvailableVoices()
    initSelectedVoice()
  }, [])

  const loadAvailableVoices = async () => {
    const voices = await getAvailableVoices()
    setVoices(voices)
  }

  const initSelectedVoice = async () => {
    const selectedVoice = await loadSelectedVoice()
    setSelectedVoice(selectedVoice)
  }

  const demoVoice = () => {
    speakText(DEMO_QUOTE)
  }

  const setSelectedValue = (value) => {
    setSelectedVoice(value)
  }

  useEffect(() => {
    saveSelectedVoice(selectedVoice)
  }, [selectedVoice])

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
        Quote Playback Voice
      </Text>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Picker
          selectedValue={selectedVoice}
          style={{ height: 50, flexGrow: 1 }}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {voices.map((v) => (
            <Picker.Item label={v.name} value={v.identifier} />
          ))}
        </Picker>
        <View style={{ flexBasis: '30%', marginLeft: 30 }}>
          <Button title="Play" onPress={demoVoice} />
        </View>
      </View>
    </View>
  )
}

export default VoicePicker
