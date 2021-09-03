import "./style/App.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import GetinTouch from "./components/GetinTouch";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Details />
      <Skills />
      <Projects />
      <GetinTouch />
      <Footer />
    </div>
  );
}

export default App;
