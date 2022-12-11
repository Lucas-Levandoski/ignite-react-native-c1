import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  headerImage: {
    height: 32,
    width: 110,
  },
  headerContainer: {
    backgroundColor: '#0D0D0D',
    height: 173,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    flex: 1,
    height: 54,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 24,
    marginRight: 24,
    marginTop: -28
  },
  input: {
    flex: 1,
    backgroundColor: '#262626',
    height: 56,
    borderRadius: 6,
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 16
  },
  addButton: {
    backgroundColor: '#1E6F9F',
    height: 54,
    width: 54,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 4
  }
})