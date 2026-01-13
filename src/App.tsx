import { useState } from 'react'
import './App.css'
import Hello from './hello'
// import Hello from './hello'
import List from './list'
import Menu from './menu'
import Login from './login'
function App() {
  const [count, setCount] = useState(2)
  return (
    <>
      <h1>Vite + React</h1>
      <Hello name="Arjun" />
      <Hello name="Akhil" />
      <Hello greeting="Hi" />
      <List />
      <button onClick={() => setCount((count) => (count) * (count))}>count is {count}</button>
      <button onClick={() => setCount(0)}>clear</button>
      <Menu>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Menu>
      <Login/>
    </>
  )
}

export default App
