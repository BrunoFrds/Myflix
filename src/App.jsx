import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Accueil from "./Pages/Accueil/Accueil";
import Footer from "./Layouts/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
