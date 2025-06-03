import { useState } from "react"

const Form = () => {
    const [text,setText] = useState<string>("")
  return (
    <input type="text" value={text} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setText(e.target.value)}} />
  )
}

export default Form