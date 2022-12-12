import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { CreatedList } from "../../components/CreateList";
import { ConcludedList } from "../../components/ConcludedList";

export function Home() {

  const [ view, setView ] = useState<string>('created');

  const getViewComponent = (viewName: string) => {
    switch(viewName) {
      case 'created':
        return <CreatedList items={[]} />;
      case 'concluded':
        return <ConcludedList items={['test']} />
      default:
        return <></>
    }
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
        />
        <TouchableOpacity style={styles.addButton}>
          <IoMdAddCircleOutline size={24} color='#FFF' />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.createdNav} onPress={() => setView('created')}>
            <Text style={styles.createdNavText}>Criadas</Text>
            <Text style={styles.createdNavCounter}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.concludedNav} onPress={() => setView('concluded')}>
            <Text style={styles.concludedNavText}>Concluídas</Text>
            <Text style={styles.concludedNavCounter}>0</Text>
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