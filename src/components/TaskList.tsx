import React from "react"
import NotStartedList from "./NotStartedList"
import WorkingList from "./WorkingList"
import CompList from "./CompList"
import { Task } from "../types"

interface TaskListProps {
  tasks: Task[]
}

const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <>
      <NotStartedList tasks={tasks} />
      <hr />
      <WorkingList tasks={tasks} />
      <hr />
      <CompList tasks={tasks} />
    </>
  )
}

export default TaskList
