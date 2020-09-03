import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
import { PURPLE } from '../constants/colors'
import { View, Text } from 'react-native'

export const HEADER_HEIGHT = 60

const DrawerButton = ({ navigation }: any) => (
  <TouchableOpacity
    onPress={() => navigation.openDrawer()}
    style={{
      width: HEADER_HEIGHT,
      height: HEADER_HEIGHT,
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <Icon name="bars" size={20} color="#fff" />
  </TouchableOpacity>
)

const HomeIcon = ({ navigation }) => {
  return (
    <Icon
      color="#fff"
      name="home"
      size={24}
      onPress={() => navigation.navigate('Home')}
    />
  )
}

const Header = () => {
  const navigation = useNavigation()
  return (
    <View
      style={{
        backgroundColor: PURPLE,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: HEADER_HEIGHT,
        paddingHorizontal: 20,
      }}
    >
      <DrawerButton navigation={navigation} />
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 1.3,
        }}
      >
        The Stoic
      </Text>
    </View>
  )
}

export default Header

/* </View>
      placement="left"
      leftComponent={<DrawerButton navigation={navigation} />}
      centerComponent={{
        text: 'Stoic Today',
        style: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 1.3,
        },
      }}
      // rightComponent={<HomeIcon navigation={navigation} />}
      backgroundColor={PURPLE}
    /> */
