import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import CarsProvider from "./context/CarsContext";
import ThemeProvider from "./context/ThemeContext";
import CreateCar from "./pages/CreateCar";
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
            </Routes>
          </LayoutPage>
        </ThemeProvider>
        </CarsProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
