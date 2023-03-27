import Header from "./components/Header/Header";
import History from "./components/History/History";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCard from "./components/AddCard/AddCard";
import EditCard from "./components/EditCard/EditCard";
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/add" element={<AddCard />} />
          <Route path="/edit" element={<EditCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
