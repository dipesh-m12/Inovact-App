import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splashscreen from "./pages/Splashscreen";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import Onboarding from "./pages/Onboarding";
function App() {
  return (
    <div className="font-poppins">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splashscreen />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
