import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav"
//Import pages
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
//Router
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { createContext } from 'react';
import { useState } from "react";
export const ThemeContext = createContext(null);
  
function App() {
    const [theme, setTheme] = useState("dark");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark": "light"));
    };
  return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
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
      </ThemeContext.Provider>

  );
}


export default App;
