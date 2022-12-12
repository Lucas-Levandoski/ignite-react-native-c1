import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { CreatedList } from "../../components/CreateList";
import { ConcludedList } from "../../components/ConcludedList";
import { ITodoItem } from "../../interfaces/ITodoItem";
import { findNextTodoId } from "../../utils/incrementalId";

export function Home() {

  const [ view, setView ] = useState<string>('created');
  const [ createdList, setCreatedList ] = useState<ITodoItem[]>([])
  const [ concludedList, setConcludedList ] = useState<ITodoItem[]>([])
  const [ todoText, setTodoText ] = useState<string>('');

  const getViewComponent = (viewName: string) => {
    switch(viewName) {
      case 'created':
        return <CreatedList items={createdList} onDelete={handleDeleteItem}/>;
      case 'concluded':
        return <ConcludedList items={[]} />
      default:
        return <></>
    }
  }

  const handleAddItem = (text: string): void => {
    setCreatedList(prev => [...prev, { id: findNextTodoId(prev), concluded: false, text }])
  }
  
  const handleDeleteItem = (id: number): void => {
    setCreatedList(prev => prev.filter(item => item.id !== id));
  }

  return(
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} style={styles.headerImage}/>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input} 
          placeholder='Adicione uma nova tarefa' 
          placeholderTextColor='#808080'
          onChangeText={text => setTodoText(text)}
          value={todoText}
        />
        <TouchableOpacity style={styles.addButton} onPress={() => handleAddItem(todoText)}>
          <IoMdAddCircleOutline size={24} color='#FFF' />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.createdNav} onPress={() => setView('created')}>
            <Text style={styles.createdNavText}>Criadas</Text>
            <Text style={styles.createdNavCounter}>{createdList.length}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.concludedNav} onPress={() => setView('concluded')}>
            <Text style={styles.concludedNavText}>Concluídas</Text>
            <Text style={styles.concludedNavCounter}>{concludedList.length}</Text>
          </TouchableOpacity>
        </View>
        <View>
          {
            getViewComponent(view)
          }
        </View>
      </View>
    </View>
  )
}