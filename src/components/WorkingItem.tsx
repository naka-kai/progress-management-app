import React from "react"
import { TaskStatusList } from "../utils/consts"
import { Task } from "../types"

interface WorkingItemProps {
  task: Task
}

const WorkingItem = ({ task }: WorkingItemProps) => {
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
      <span style={{ marginRight: "20px" }}>
        完了予定日：
        <input type="date" />
      </span>
      <span>
        進捗率：
        <select>
          <option value="0">0</option>
          <option value="0">0</option>
          <option value="0">0</option>
          <option value="0">0</option>
          <option value="0">0</option>
        </select>
        %
      </span>
    </div>
  )
}

export default WorkingItem
