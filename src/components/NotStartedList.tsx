import React from "react"
import NotStartedItem from "./NotStartedItem"
import { Task } from "../types"

interface NotStartedListProps {
  tasks: Task[]
}

const NotStartedList = ({ tasks }: NotStartedListProps) => {
  return (
    <>
      <h3>未着手</h3>
      <ul>
        {tasks
          .filter((task) => task.status === "NotStarted")
          .map((task) => (
            <li key={task.id}>
              <NotStartedItem task={task} />
            </li>
          ))}
      </ul>
    </>
  )
}

export default NotStartedList
