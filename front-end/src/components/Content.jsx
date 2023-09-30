import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from '../pages/Search';
import SearchResult from '../pages/SearchResult';
import Header from './Header';
import Menu from './Menu';
import About from '../pages/About';
import Home from '../pages/Home';

function Content() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/pesquisa" element={ <Search /> } />
          <Route path="/sobre" element={ <About /> } />
          <Route path="/resultado-pesquisa" element={ <SearchResult /> } />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default Content;
