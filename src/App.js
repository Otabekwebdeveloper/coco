import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Brands from "./components/Brands";
import Features from "./components/Features";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Brands />
      <Features />
    </BrowserRouter>
  );
}

export default App;
