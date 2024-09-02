import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void
}

export default function Image({ onPress }: ButtonProps) {
  return <TouchableOpacity onPress={onPress} style={{ width: '98%', justifyContent: 'center', alignItems: 'center', height: 160, backgroundColor: '#B4B4B4', marginHorizontal: 4, marginTop:2, borderRadius: 8 }}><Text>Adicionar imagem</Text></TouchableOpacity>
}

