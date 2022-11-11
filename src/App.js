import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar />

          <main>Content</main>
        </div>
      </Router>
    </div>
  );
}

export default App;
