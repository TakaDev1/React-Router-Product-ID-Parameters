import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex flex-col justify-center">
        <BrowserRouter>
          <h1>React-Router-Product-ID-Parameters</h1>
          <Routes>
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
