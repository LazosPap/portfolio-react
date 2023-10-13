import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav"
//Import pages
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<AboutMe/>}/>
        <Route path="/projects" exact element={<Projects/>}/>
        <Route path="/contact" exact element={<ContactMe/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
