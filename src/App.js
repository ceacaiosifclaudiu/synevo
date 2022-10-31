import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Appointments from "./pages/appointments/Appointments";
import Home from "./pages/home/Home";
import ResultsList from "./pages/resultslist/ResultsList";

import Store from "./pages/store/Store";
import GlobalStyle from "./styles/GlobalStyle.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/resultslist" element={<ResultsList />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
