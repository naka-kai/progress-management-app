import React, { useState } from "react"
import Form from "./Form"
import TaskList from "./TaskList"
import { Task } from "../types"
import { dummyTaskList } from "../data/dummyTaskList"

const TaskApp = () => {
  const getId = () => Math.random().toString(32).substring(2) // ランダムな文字列IDを生成
  const [tasks, setTasks] = useState<Task[]>(dummyTaskList) // タスク
  const [editingTaskId, setEditingTaskId] = useState("") // タスクが編集中(inputタグ状態)のタスクID

  // 更新処理を共通化
  const updateTaskById = (taskId: string, updater: any) => {
    const newTask = [...tasks]
    const task = newTask.find((task) => task.id === taskId)
    updater(task)
    setTasks(newTask)
  }

  // tasksにタスクを追加
  const addTask = (content: string) => {
    setTasks([
      ...tasks,
      { id: getId(), content: content, status: "NotStarted" }
    ])
  }

  // タイトル編集中のタスク
  const toggleEditingTask = (taskId: string) => {
    setEditingTaskId(taskId)
  }

  return (
    <>
      <h1>タスク管理</h1>
      <Form addTask={addTask} />
      <TaskList tasks={tasks} />
    </>
  )
}

export default TaskApp
