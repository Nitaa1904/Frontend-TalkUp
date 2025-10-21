import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "flowbite-react";
import customTheme from "./theme";
import "./index.css";

import Navbar from "./view/components/layout/Navbar";
import Footer from "./view/components/layout/Footer";
import Home from "./view/pages/Home";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;