import React from 'react'
import { Text, Image, View, ScrollView } from 'react-native'
import ScreenLayout from '../../components/ScreenLayout'
import { getPictureSource } from '../../types/IAuthor'
import { TEXT_GREY } from '../../constants/colors'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '.'

type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  'AuthorDetailScreen'
>

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AuthorDetailScreen'
>

export type AuthorDetailScreenProps = {
  route: ProfileScreenRouteProp
  navigation: ProfileScreenNavigationProp
}

const authorData = {
  'Marcus Aurelius': {
    livingDates: {
      from: '121 AD',
      to: '180 AD',
    },
    subtitle: 'Roman Emperor',
    infoText:
      'Marcus Aurelius Antoninus was the Roman emperor from 161 to 180 and a Stoic philosopher. He was the last of the rulers known as the Five Good Emperors, and the last emperor of the Pax Romana, an age of relative peace and stability for the Roman Empire. He served as Roman consul in 140, 145, and 161.',
  },
  'Lucius Annaeus Seneca': {
    livingDates: {
      from: 'c. 4 BC',
      to: '65 AD',
    },
    subtitle: 'Roman Philosopher',
    infoText:
      'Lucius Annaeus Seneca, also known as Seneca the Younger, was a Hispano-Roman Stoic philosopher, statesman, dramatist, and—in one work—satirist from the Silver Age of Latin literature. Seneca was born in Corduba in Hispania, and raised in Rome, where he was trained in rhetoric and philosophy.',
  },
  Epictetus: {
    livingDates: {
      from: '50 AD',
      to: '135 AD',
    },
    subtitle: 'Philosopher',
    infoText:
      'Epictetus was a Greek Stoic philosopher. He was born a slave at Hierapolis, Phrygia and lived in Rome until his banishment, when he went to Nicopolis in northwestern Greece for the rest of his life. His teachings were written down and published by his pupil Arrian in his Discourses and Enchiridion.',
  },
  'Zeno of Citium': {
    livingDates: {
      from: '334 BC',
      to: '262 BC',
    },
    infoText:
      'Zeno of Citium was a Hellenistic philosopher of Phoenician origin from Citium, Cyprus. Zeno was the founder of the Stoic school of philosophy, which he taught in Athens from about 300 BC.',
  },
}

const AuthorDetailScreen = ({ route }: AuthorDetailScreenProps) => {
  const author = route.params.author
  const authorInfo = authorData[author.name]
  return (
    <ScreenLayout showHeader={false}>
      <View
        style={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <View
          style={{
            marginTop: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={getPictureSource(author)}
            style={{ height: 200, width: 200, borderRadius: 5000 }}
          />
          <Text style={{ marginTop: 10, fontSize: 18, color: TEXT_GREY }}>
            {authorInfo.livingDates.from} - {authorInfo.livingDates.to}
          </Text>
        </View>
        <ScrollView
          style={{
            padding: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text style={{ fontSize: 16, lineHeight: 24, paddingBottom: 300 }}>
            {authorData[author.name].infoText}
          </Text>
        </ScrollView>
      </View>
    </ScreenLayout>
  )
}

export default AuthorDetailScreen
