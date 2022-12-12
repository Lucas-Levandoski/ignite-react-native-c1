import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  emptyContainer: {
    borderTopColor: '#333333',
    borderTopWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 48
  },
  emptyText1: {
    color: '#808080',
    fontWeight: 'bold'
  },
  emptyText2: {
    color: '#808080',
  },
  itemContainer: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#262626',
    borderColor: '#333333',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemTextContent: {
    color: '#F2F2F2',
    textAlign: 'center',
    flex: 1,
    width: '100%'
  }
})