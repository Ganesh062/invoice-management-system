import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Home from "./pages/Home";
import InvoiceForm from "./pages/InvoiceForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/invoice" element={<InvoiceForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
