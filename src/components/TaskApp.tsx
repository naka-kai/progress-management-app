import React, { useState } from "react"
import Form from "./Form"
import TaskList from "./TaskList"
import { Task } from "../types"
import { dummyTaskList } from "../data/dummyTaskList"

const TaskApp = () => {
  const getId = () => Math.random().toString(32).substring(2) // ランダムな文字列IDを生成
  const [tasks, setTasks] = useState<Task[]>(dummyTaskList) // タスク

  // 更新処理を共通化
  const updateTaskById = (taskId: Task["id"], updater: any) => {
    const newTask = [...tasks]
    const task = newTask.find((task) => task.id === taskId)
    updater(task)
    setTasks(newTask)
  }

  // tasksにタスクを追加
  const addTask = (content: Task["content"]) => {
    setTasks([
      ...tasks,
      { id: getId(), content: content, status: "NotStarted", isEditing: false }
    ])
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
