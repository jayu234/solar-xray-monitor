import Home from "./components/Home"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useState } from "react";
import Analyze from "./components/Analyze";
import Classification from "./components/Classification";

function App() {
  const [data, setData] = useState({});
  const [operation, setOperation] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} setOperation={setOperation} operation={operation}/>} />
          <Route path="/analyze" element={<Analyze data={data} setData={setData} operation={operation} />} />
          <Route path="/classify" element={<Classification data={data} setData={setData} operation={operation} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
