import React from "react"
import WorkingItem from "./WorkingItem"
import { Task } from "../types"

interface WorkingListProps {
  tasks: Task[]
}

const WorkingList = ({ tasks }: WorkingListProps) => {
  return (
    <>
      <h3>進行中</h3>
      <ul>
        {tasks
          .filter((task) => task.status === "Working")
          .map((task) => (
            <li key={task.id}>
              <WorkingItem task={task} />
            </li>
          ))}
      </ul>
    </>
  )
}

export default WorkingList
