import React from "react";
import Home from "./Home"
import Jobpage from "./Fresser/Jobpage"
import Contextpage from "./Contest/Contextpage"
import Hackthonpage from "./Hackthon/Hackthonpage";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Internpage from "./Internship/Internpage";
import Contact from "./Contact";
import Experience_page from './Experience/Experiencepage';
import Footer from "./Footer";
const App = () => {
   return (<>
      <Nav />
      <Routes>
         <Route path='/' exact element={<Home />} />
         <Route path='/internship' element={<Internpage />} />
         <Route path='/Job' element={<Jobpage />} />
         <Route path='/experience' element={<Experience_page />} />
         <Route path='/contest' element={<Contextpage />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/hackthon' element={<Hackthonpage />} />
      </Routes>
      <Footer />
   </>)
}

export default App;