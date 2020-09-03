import React from 'react'
import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'
import { Text } from 'react-native'
import { DEVELOPMENT_MODE } from '../constants/toggles'

export const BANNER_HEIGHT = 120

!DEVELOPMENT_MODE && setTestDeviceIDAsync('EMULATOR')

const AdBanner = () => {
  const bannerError = (props) => {
    console.log('bannerError', props)
  }

  return (
    <>
      {!DEVELOPMENT_MODE && (
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID="ca-app-pub-1212314871829612/4607946425" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds={false} // true or false
          onDidFailToReceiveAdWithError={bannerError}
        />
      )}
    </>
  )
}

export default AdBanner
