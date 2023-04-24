import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../pages/Search';
import SearchResult from '../pages/SearchResult';
import Header from './Header';

function Content() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/pesquisa" element={ <Search /> } />
          <Route path="/resultado-pesquisa" element={ <SearchResult /> } />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default Content;
