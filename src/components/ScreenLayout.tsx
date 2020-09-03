import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { PURPLE } from '../constants/colors'
import AdBanner, { BANNER_HEIGHT } from './AdBanner'
import Header, { HEADER_HEIGHT } from './Header'

type ScreenLayoutProps = {
  showHeader?: boolean
  children: React.ReactNode
}

export const STATUS_BAR_HEIGHT = 25

const ScreenLayout = ({ showHeader = true, children }: ScreenLayoutProps) => {
  const mainContentHeight =
    Dimensions.get('screen').height -
    HEADER_HEIGHT -
    BANNER_HEIGHT -
    STATUS_BAR_HEIGHT

  return (
    <View
      style={{
        height: Dimensions.get('screen').height,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        marginTop: STATUS_BAR_HEIGHT,
      }}
    >
      <View style={{ display: 'flex', flexDirection: 'column' }}>
        {showHeader && <Header />}
        <View
          style={{
            flexShrink: 0,
            flexGrow: 1,
            height: mainContentHeight,
          }}
        >
          {children}
        </View>
      </View>
      <View
        style={{
          height: BANNER_HEIGHT,
          backgroundColor: PURPLE,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <AdBanner />
      </View>
    </View>
  )
}

export default ScreenLayout
