import { BrowserRouter, Route, Routes } from "react-router-dom"
import LayoutPage from "./components/LayoutPage"
import CreateCar from "./pages/CreateCar"
import EditCar from "./pages/EditCar"
import Home from "./pages/Home"


function App() {

  return (
    <LayoutPage>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<CreateCar/>}/>
          <Route path="/edit/*" element={<EditCar/>}/>
        </Routes>
      </BrowserRouter>
    </LayoutPage>
  )
}

export default App
