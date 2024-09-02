import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../types/navigation';
import { RouteProp } from '@react-navigation/native'


type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList>
type ProfileScreenRouteProp = RouteProp<RootStackParamsList>

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}


const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Leonardo Seiti',
  userSlug: '@Seiti.leo'
}



export default function Posts({ navigation, route }: Props) {
  const { userId } = route.params

  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}