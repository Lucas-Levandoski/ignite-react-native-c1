import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IoMdAddCircleOutline } from "react-icons/io";
import logo from "../../assets/logo.png";

export function Home() {
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
    </View>
  )
}