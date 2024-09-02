import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Avatar from '../components/Avatar';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../types/navigation';
import { RouteProp } from '@react-navigation/native';
import Header from '../components/Header';
import Profile from '../components/Profile';  // Certifique-se de que o componente User está correto

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList>;
type ProfileScreenRouteProp = RouteProp<RootStackParamsList>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Leonardo Seiti',
  postsource: 'https://images.unsplash.com/photo-1455138183306-12dfce6f541b?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imagesource: 'https://images.unsplash.com/photo-1455138183306-12dfce6f541b?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export default function Mainoage({ navigation, route }: Props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
        <Avatar username={userProps.username} source={userProps.source} />
        <Profile
          username={userProps.username}
          source={userProps.source}
          imagesource={userProps.imagesource}
          postsource={userProps.postsource}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
