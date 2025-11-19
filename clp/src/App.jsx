import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdmissionForm from "./pages/AdmissionForm";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdmissionForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
