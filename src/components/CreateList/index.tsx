import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CiViewList } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi"
import { ITodoItem } from "../../interfaces/ITodoItem";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  items: ITodoItem[],
  onDelete: (id: number) => void,
  onCheck: (id: number, isChecked: boolean) => void,
}

export function CreatedList({ items, onDelete, onCheck }: Props) {

  return (
    items.length
      ? (
        <ScrollView>
          {
            items.map(item => (
              <View style={styles.itemContainer}>
                <BouncyCheckbox 
                  onPress={isChecked => onCheck(item.id, isChecked)}
                  text={item.text}
                  textStyle={styles.itemTextContent}
                  fillColor='#5E60CE'
                  isChecked={item.concluded}
                />
                <TouchableOpacity onPress={() => onDelete(item.id)} >
                  <HiOutlineTrash color='#808080' size={20} />
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