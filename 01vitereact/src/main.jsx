import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

function CustomApp() {
  return (
    <div>
      <h1>Hello World!, I am your custom App in react</h1>
    </div>
  )
}

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

// Babble transpiler injects it
const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)//  The parentheses are used here to wrap the JSX expression. This is often done for better readability, especially when the JSX spans multiple lines.

const anotherUser = "Shahid Jamal"
const TrueReactElement = React.createElement(
  'a', // tag
  { href: 'https://www.google.com', target: '_blank' }, // Object for props if no attributes then we can leave it empty
  'Visit Google from True React Element', // text content inside the tag
  anotherUser // we can pass variable as well, note that only evaluated expressions  are allowed, no JS code can be written here
)

createRoot(document.getElementById('root')).render(
  // TrueReactElement
  // anotherElement
  // ReactElement //Why does this not work? Ans: We are using custom react element which is not known by vite how to render it. Note that reactElement is an object.
  // CustomApp() // we can do this too
  // <StrictMode>

  //   <CustomApp />
  <App />
  // </StrictMode>,
)
