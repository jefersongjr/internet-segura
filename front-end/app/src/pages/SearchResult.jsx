import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function SearchResult() {
  const { search } = useContext(SearchContext);

  return (
    <div className="SearchResult"> 
      {search.map((text) => <p>{text.tipo_info}</p>)}
    </div>
  )
}

export default SearchResult