import { create } from "zustand"
import { Task } from "../types"
import { dummyTaskList } from "../data/dummyTaskList"

// 管理する状態の初期値
const TASKS: Task[] = dummyTaskList

// タスクの状態の型宣言
type State = {
  tasks: Task[]
  editingTask: (id: Task["id"]) => void // 編集中(inputタグ状態)
}

// store作成
export const useStore = create<State>((set, get) => ({
  // store内のtasks
  tasks: TASKS,
  // store内のtasksの状態を更新する
  editingTask: (id) => {
    set((state) => {
      return {
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, isEditing: !task.isEditing }
          }
          return task
        })
      }
    })
  }
}))
