import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Rodape";
import Icons from "./Components/Icons";
import Banner from "./Components/Banner";
import Astra from "./Components/Agents/Astra";
import Breach from "./Components/Agents/Breach";
import Brig from "./Components/Agents/Brig";
import Jett from "./Components/Agents/Jett";
import Sage from "./Components/Agents/Sage";
import Sova from "./Components/Agents/Sova";
import Phoenix from "./Components/Agents/Phoenix";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/astra" element={<Astra />} />
        <Route path="/breach" element={<Breach />} />
        <Route path="/brig" element={<Brig />} />
        <Route path="/jett" element={<Jett />} />
        <Route path="/sage" element={<Sage />} />
        <Route path="/sova" element={<Sova />} />
        <Route path="/pheonix" element={<Phoenix />} />
      </Routes>

      <Icons/>
      
      <Footer />

    
    </BrowserRouter>
  );
}

export default App;
