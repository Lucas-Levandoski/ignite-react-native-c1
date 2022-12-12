import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CiViewList } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi"
import { ITodoItem } from "../../interfaces/ITodoItem";


type Props = {
  items: ITodoItem[],
  onDelete: (id: number) => void
}

export function CreatedList({ items, onDelete }: Props) {

  return (
    items.length
      ? (
        <ScrollView>
          {
            items.map(item => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemTextContent}></Text>
                <TouchableOpacity onPress={() => onDelete(item.id)} >
                  <HiOutlineTrash />
                </TouchableOpacity>
              </View>
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