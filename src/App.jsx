import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CommitteePage from "./pages/CommitteePage";
import Submission from "./pages/Submission";
import CallForPapers from "./pages/CallForPapers";
import PastConf from "./pages/PastConf";
import Registration from "./pages/Registration";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committee" element={<CommitteePage />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/past-conferences" element={<PastConf />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
