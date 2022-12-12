import { ScrollView, Text, View } from "react-native";


type Props = {
  items: string[]
}

export function ConcludedList({ items }: Props) {

  return (
    items.length
      ? (
        <ScrollView>
          {
            items.map(item => (
              <p>{item}</p>
            ))
          }
        </ScrollView>
      )
      : (
        <View>
          <Text>Você ainda não tem tarefas cadastradas</Text>
        </View>
      )
  )
}