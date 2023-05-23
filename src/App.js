import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Rodape";
import Icons from "./Components/Icons";
import Banner from "./Components/Banner";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Banner />} />
      </Routes>

      <Icons/>
      
      <Footer />

    
    </BrowserRouter>
  );
}

export default App;
