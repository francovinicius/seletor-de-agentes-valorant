import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from './Components/Banner'
import Footer from "./Components/Rodape";

function App() {
  return (
    <BrowserRouter>

    <Banner />

      <Routes>
        <Route path="/" element={<Footer />} />
      </Routes>

    
    </BrowserRouter>
  );
}

export default App;
