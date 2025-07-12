import { BrowserRouter, Route, Routes } from "react-router-dom";
import Splashscreen from "./pages/Splashscreen";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ForgotPassword from "./pages/ForgotPassword";
import Onboarding from "./pages/Onboarding";
import Connections from "./pages/Connections";
import Chats from "./pages/Chats";
import Add from "./pages/Add";
import OpportunityApply from "./pages/OpportunityApply";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Teams from "./pages/Teams";
import TeamInteraction from "./pages/TeamInteraction";
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
          <Route path="/connections" element={<Connections />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/add" element={<Add />} />
          <Route path="/apply/:jobId" element={<OpportunityApply />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamInteraction />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
