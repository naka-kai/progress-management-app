import React, { useState } from "react"

interface FormProps {
  addTask: (content: string) => void
}

const Form = ({ addTask }: FormProps) => {
  const [content, setContent] = useState("")

  // 入力値をcontentに反映
  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  // Enter押下時、または「タスク追加」ボタン押下時にtasksに追加
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    // フォームのデフォルト送信動作をキャンセル
    e.preventDefault()

    // formSend関数実行
    addTaskBtnClick()
  }

  // フォームデータ送信
  const addTaskBtnClick = () => {
    // 入力値が空白文字の場合は終了
    if (content === "") {
      return
    }
    // TaskAppコンポーネントの addTask 関数を実行
    addTask(content)
    setContent("")
  }

  // TODO: 入力しないとボタン押下できないようにする
  // TODO: 空でEnterしても送信されないようにする

  return (
    <>
      <form onSubmit={(e) => submitForm(e)}>
        <input
          type="text"
          style={{ marginRight: "10px" }}
          placeholder="タスクを入力"
          value={content}
          onChange={changeContent}
        />
        <button onClick={addTaskBtnClick}>タスク追加</button>
      </form>
    </>
  )
}

export default Form
