import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Brands from "./components/Brands";
import Features from "./components/Features";
import About from "./components/About";
import Strategies from "./components/Strategies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Brands />
      <Features />
      <About />
      <Strategies />
    </BrowserRouter>
  );
}

export default App;
