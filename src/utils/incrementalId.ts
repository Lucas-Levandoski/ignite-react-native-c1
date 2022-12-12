import { ITodoItem } from "../interfaces/ITodoItem";

export function findNextTodoId(items: ITodoItem[]): number {
  let i = 0;

  while (items.findIndex(item => item.id === i) >= 0) {
    i++;
  }

  return i;
}