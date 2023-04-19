
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../pages/Search';

function Content() {

return (
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/pesquisa" element={<Search />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
   </React.StrictMode>
  );
}

export default Content;