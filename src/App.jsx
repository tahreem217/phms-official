import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Notices from "./components/Notices";
import Thought from "./components/Thought";
import Gallery from "./components/Gallery";
import Admission from "./components/Admission";
import About from "./components/About";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow pb-0 mb-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <Notices />
                  <Thought />
                </>
              }
            />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
