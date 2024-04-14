import { TaskStatus } from "../types"

export const TaskStatusList: { [key in TaskStatus]: string } = {
  NotStarted: "未着手",
  Working: "進行中",
  Completed: "完了"
}
