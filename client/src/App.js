import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import MyWork from './pages/MyWork/MyWork';
import Website from './pages/Website/Website';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <Contact />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/my-work' element={<MyWork />} />
        <Route exact path='/my-work/:id' element={<Website />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
