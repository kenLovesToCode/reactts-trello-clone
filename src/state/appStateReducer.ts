import { nanoid } from "nanoid";

import { Action } from "./actions";
import { findItemIndexById } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null
};

export const appStateReducer = (draft: AppState, action: Action) : AppState | void => {
  switch(action.type){
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: []
      })
      break
    }
      // return {
      //   ...state, lists: [...state.lists, {id: nanoid(), text: action.payload, tasks: []}]
      // }
    case "ADD_TASK": {
      const { listId, text } = action.payload
      const targetListIndex = findItemIndexById(draft.lists, listId)
      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        text
      })
      break
    }
    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload
      break
    }
    default:
      break
  }
}