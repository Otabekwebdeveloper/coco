import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Brands from "./components/Brands";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Brands />
    </BrowserRouter>
  );
}

export default App;
