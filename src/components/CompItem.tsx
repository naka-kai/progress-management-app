import React from "react"
import { TaskStatusList } from "../utils/consts"
import { Task } from "../types"

interface TaskItemProps {
  task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div>
      <select defaultValue={task.status}>
        {Object.entries(TaskStatusList).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
      <span style={{ marginRight: "20px" }}>{task.content}</span>
      <span>完了日：2024/04/05</span>
    </div>
  )
}

export default TaskItem
