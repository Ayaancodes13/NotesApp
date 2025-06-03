import { useEffect, useState } from 'react'
import Postcard from './components/Postcard'
import Form from './components/Form'
import './App.css'
type PostData = {
  userId:number,
  id:number,
  title:string,
  body:string
}
function App() {
  const [data,setData] = useState<null|PostData[]>(null)
  useEffect(
    ()=>{
      const fetchData = async ():Promise<void>  =>{
        const received= await fetch('https://jsonplaceholder.typicode.com/posts/')
        const val = await received.json()
        setData(val)
      }
      fetchData()
    },[]
  )
  return (
    <>
    {
      data !== null && data.map(
        (post)=>(
          <Postcard key={post.id} title={post.title} body={post.body}/>
        )
      )
    }
    <
      Form />
    </>
  )
}

export default App
