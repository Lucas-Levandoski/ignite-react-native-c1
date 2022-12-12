import { ScrollView, Text, View } from "react-native";
import { ITodoItem } from "../../interfaces/ITodoItem";


type Props = {
  items: ITodoItem[]
}

export function ConcludedList({ items }: Props) {

  return (
    items.length
      ? (
        <ScrollView>
          {
            items.map(item => (
              <p>{item.text}</p>
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