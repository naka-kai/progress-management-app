export type TaskStatus = "NotStarted" | "Working" | "Completed"

export interface Task {
  id: string
  content: string
  status: TaskStatus
}
