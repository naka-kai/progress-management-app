import React from "react"
import CompItem from "./CompItem"
import { Task } from "../types"

interface CompListProps {
  tasks: Task[]
}

const CompList = ({ tasks }: CompListProps) => {
  return (
    <>
      <h3>完了</h3>
      <ul>
        {tasks
          .filter((task) => task.status === "Completed")
          .map((task) => (
            <li key={task.id}>
              <CompItem task={task} />
            </li>
          ))}
      </ul>
    </>
  )
}

export default CompList
