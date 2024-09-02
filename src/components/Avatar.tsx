import { Image, StyleSheet, Text, View } from "react-native";

interface UserProps {
  source: string,
  username: string,
}

export default function User({ source, username }: UserProps) {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: source }} style={styles.userImage} />
      <Text style={styles.username}>{username}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  userImage: {
    right: 125,
    width: 120,
    height: 120,
    borderRadius: 160,
    borderWidth: 4,
    borderColor: '#FFFF57'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#484646',
   bottom: 75,
   left: 30 
  }
})