import React from "react"
import { Task } from "../types"
import { TaskStatusList } from "../utils/consts"

interface NotStartedItemProps {
  task: Task
}

const NotStartedItem = ({ task }: NotStartedItemProps) => {
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
      <span>
        着手予定日：
        <input type="date" />
      </span>
    </div>
  )
}

export default NotStartedItem
