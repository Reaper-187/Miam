import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/headerComp/Header";
import { Home } from "./Pages/Home";
import { Service } from "./Pages/Service";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
