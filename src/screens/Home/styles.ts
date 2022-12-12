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
    height: 54,
    alignItems: 'center',
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
  },
  content: {
    marginLeft: 24,
    marginRight: 24,
  },
  navBar: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    marginTop: 32,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  createdNav: {
    flexDirection: 'row',
  },
  createdNavText: {
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  createdNavCounter: {
    color: '#FFF',
    marginLeft: 8,
    backgroundColor: '#333333',
    height: 20,
    width: '100%',
    fontSize: 12,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  concludedNav: {
    flexDirection: 'row'
  },
  concludedNavText: {
    color: '#8284FA',
    fontWeight: 'bold',
  },
  concludedNavCounter: {
    color: '#FFF',
    marginLeft: 8,
    backgroundColor: '#333333',
    height: 20,
    width: '100%',
    fontSize: 12,
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
})