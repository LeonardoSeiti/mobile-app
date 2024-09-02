import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface postProps {
  imagesource: string;
  username: string;
}
interface UserProps {
  source: string;
  username: string;
}
interface ImageProps {
  postsource: string;
}

export default function User(
  { username, source }: UserProps,
  { imagesource }: postProps,
  { postsource }: ImageProps
) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: source }} style={styles.userImage} />
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: imagesource }} style={styles.postImage} />
      <Image source={{ uri: postsource }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
});