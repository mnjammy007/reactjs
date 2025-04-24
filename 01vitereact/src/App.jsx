import Base from './base'

function App() {
  const username = 'Nasir Jamal'
  return (
    // <div> we can use div or fragment, fragment is more common
    // Inside html section only evaluated expression can be used
    <>
      <Base />
      <h1>Hello {username}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </>
    // </div>
  )
}

export default App
