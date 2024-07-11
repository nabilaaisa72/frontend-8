{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/}

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import IndukProps from "./pages/Induk-Props";
import IndukImage from "./pages/IndukImage";
import Landing from "./pages/Landing";
import NotFound from "./pages/notfound";
import State from "./pages/State";
import EventHandling from "./pages/EventHandling";
import NonState from "./pages/NonState";
import UseEffect from "./pages/UseEffect";
import Animasi from "./componen/Animasi";
import FetchApi from "./componen/FetchApi";
import UpdateState from "./componen/UpdateState";
import ReactContext from "./pages/ReactContext";
import GetMahasiswa from "./componen/admin/GetMahasiswa";

function App() {
  return ( 
    <>
    <Routes>
      <Route path="/" element={Home}/>
      <Route path="/landingpage" element={Landing}/>
      <Route path="/indukprops" element={IndukProps}/>
      <Route path="/indukimage" element={IndukImage}/>
      <Route path="/state" element={State}/>
      <Route path="/nonstate" element={NonState}/>
      <Route path="/home" element={Home}/>
      <Route path="/eventhandling" element={EventHandling} />
      <Route path="/effect" element={UseEffect} />
      <Route path="/fetchapi" element={FetchApi} />
      <Route path="/animasi" element={Animasi} />
      <Route path="/update" element={UpdateState} />
      <Route path="/context" element={ReactContext} />
      <Route path="/get" element={<GetMahasiswa/>} />

    </Routes>
    </>
   );
}



export default App;