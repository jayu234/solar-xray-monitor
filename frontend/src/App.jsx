import Home from "./components/Home"
import Results from "./components/Results"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route path="/result" element={<Results data={data} setData={setData} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
