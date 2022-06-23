import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import CarsProvider from "./context/CarsContext";
import ThemeProvider from "./context/ThemeContext";
import CreateCar from "./pages/CreateCar";
import EditCar from "./pages/EditCar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <CarsProvider>
        <ThemeProvider>
          <LayoutPage>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateCar />} />
              <Route path="/edit/*" element={<EditCar />} />
            </Routes>
          </LayoutPage>
        </ThemeProvider>
        </CarsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
