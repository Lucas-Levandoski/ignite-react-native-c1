import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import { CiViewList } from "react-icons/ci";


type Props = {
  items: string[]
}

export function CreatedList({ items }: Props) {

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
        <View style={styles.emptyContainer}>
          <CiViewList size={80} color='#808080'/>
          <Text style={styles.emptyText1}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.emptyText2}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      )
  )
}