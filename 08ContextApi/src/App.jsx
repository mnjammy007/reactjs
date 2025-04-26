import './App.css'
import UserContextProvider from './context/UserContextProvider'
import { Login, Profile } from './components'

function App() {

  return (
    <UserContextProvider >
      <h1>Hello for context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
