import React from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.scss"
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter></BrowserRouter>
    </div>
  )
}

export default App
