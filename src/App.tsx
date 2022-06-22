import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateCar from "./pages/CreateCar"
import EditCar from "./pages/EditCar"
import Home from "./pages/Home"


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateCar/>}/>
          <Route path="/edit/*" element={<EditCar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
