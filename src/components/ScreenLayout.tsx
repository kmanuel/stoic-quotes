import React from 'react'
import { View } from 'react-native'
import Header from './Header'

import { AdMobBanner, setTestDeviceIDAsync } from 'expo-ads-admob'

setTestDeviceIDAsync('EMULATOR')

type ScreenLayoutProps = {
  children: React.ReactNode
}

const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  return (
    <View style={{ height: '100%' }}>
      <Header />
      {children}
      <View
        style={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <AdMobBanner
          bannerSize="largeBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds // true or false
          onDidFailToReceiveAdWithError={this.bannerError}
        />
      </View>
    </View>
  )
}

export default ScreenLayout
