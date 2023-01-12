import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
