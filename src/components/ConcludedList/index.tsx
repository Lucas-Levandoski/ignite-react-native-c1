import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CiViewList } from "react-icons/ci";
import { HiOutlineTrash } from "react-icons/hi"
import { ITodoItem } from "../../interfaces/ITodoItem";
import BouncyCheckbox from "react-native-bouncy-checkbox";

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
              <View style={styles.itemContainer} key={item.id}>
                <BouncyCheckbox 
                  text={item.text}
                  textStyle={styles.itemTextContent}
                  fillColor='#5E60CE'
                  isChecked={item.concluded}
                />
              </View>
            ))
          }
        </ScrollView>
      )
      : (
        <View style={styles.emptyContainer}>
          <CiViewList size={80} color='#808080'/>
          <Text style={styles.emptyText1}>Você ainda não tem tarefas concluidas</Text>
          <Text style={styles.emptyText2}>Conclua tarefas e organize seus itens a fazer</Text>
        </View>
      )
  )
}