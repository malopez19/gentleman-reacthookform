import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import { useFetch } from './hooks/useFetch'
import Customform  from './components/CustomForm/Customform'

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

interface Data {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {
  const [count, setCount] = useState(0)
  const { data, loading, error } = useFetch<Data>(URL)

  const handleclick = () => {
    console.log('Button clicked')
    setCount(count + 1)
  }

  if(loading){
    return <div>cargando...</div>
  }

  if(error){
    return <div>Ups hubo un error {error.message}</div>
  }
  
  return (
    <>
      <Button countMethod={handleclick} label={`count is ${count}`}/>
      <div>{JSON.stringify(data)}</div>

      <br></br>
      <br></br>
      <Customform />
    </>
  )
}

export default App
