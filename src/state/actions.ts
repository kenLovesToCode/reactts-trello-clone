import { DragItem } from "../DragItem"

// ========= ACTION TYPES ============
export type Action = | {
  type: "ADD_LIST"
  payload: string
}  | {
  type: "ADD_TASK"
  payload: {text: string; listId: string}
} | {
  type: "SET_DRAGGED_ITEM"
  payload: DragItem | null
}
// ========= ACTION TYPES ============



// =========== ACTION CREATORS ===========
export const addTask = (text: string, listId: string) : Action => ({
  type: "ADD_TASK",
  payload: {
    text, listId
  }
})

export const addList = (text: string) : Action => ({
  type: "ADD_LIST",
  payload: text
})

export const setDraggedItem = (draggedItem: DragItem | null) : Action => ({
  type: "SET_DRAGGED_ITEM",
  payload: draggedItem
})
// =========== ACTION CREATORS ===========