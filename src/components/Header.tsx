import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Header as RNEHeader } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import { PURPLE } from '../constants/colors'

const DrawerButton = ({ navigation }: any) => (
  <TouchableOpacity
    onPress={() => navigation.openDrawer()}
    style={{ width: 40, height: 25 }}
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
    <RNEHeader
      placement="left"
      leftComponent={<DrawerButton navigation={navigation} />}
      centerComponent={{
        text: 'The Stoic',
        style: {
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          letterSpacing: 1.3,
        },
      }}
      rightComponent={<HomeIcon navigation={navigation} />}
      backgroundColor={PURPLE}
    />
  )
}

export default Header
