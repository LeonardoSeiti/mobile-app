import { createDrawerNavigator } from '@react-navigation/drawer'
import Profile from '../screens/Profile'
import { Feather } from '@expo/vector-icons'
import TabNavigation from './tabs.routes'
import { RootStackParamsList } from '../types/navigation'
import NewPost from '../screens/NewPost'
import Mainpage from '../screens/Mainpage'

const DrawerNavigator = createDrawerNavigator<RootStackParamsList>()

export default function DrawerNavigation() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name='Home' component={TabNavigation} options={{
        drawerIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
      }} />
      <DrawerNavigator.Screen name='Profile' initialParams={{ userId: '12345' }} component={Profile} options={{
        drawerIcon: ({ color, size }) => <Feather name='user' size={size} color={color} />
      }} />
      <DrawerNavigator.Screen name='NewPost' initialParams={{userId: '12345'}} component={NewPost} options={{
        drawerIcon: ({ color, size }) => <Feather name='pen-tool' size={size} color={color} />
      }} />
      <DrawerNavigator.Screen name='Main' initialParams={{ userId: '12345' }} component={Mainpage} options={{
        drawerIcon: ({ color, size }) => <Feather name='instagram' size={size} color={color} />
      }} />
    </DrawerNavigator.Navigator>
  )
}