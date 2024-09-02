import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  onPress: () => void;
}

export default function Twins({ onPress }: ButtonProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "45%",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          backgroundColor: "#FBDF4B",
          marginHorizontal: 4,
          marginTop: 10,
          borderRadius: 8,
        }}
      >
        <Text>Enviar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={{
          width: "45%",
          justifyContent: "center",
          alignItems: "center",
          height: 60,
          backgroundColor: "#B4B4B4",
          marginHorizontal: 4,
          marginTop: 10,
          borderRadius: 8,
        }}
      >
        <Text>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 2,
  },
});
