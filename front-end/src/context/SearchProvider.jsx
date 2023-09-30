import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    axios.get('https://internet-segura-api.vercel.app/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const contextSearch = useMemo(() => ({
    data,
    search,
    setSearch,
    isActive,
    setIsActive,
  }), [data, search, isActive]);
  return (
    <SearchContext.Provider value={ contextSearch }>
      { children }
    </SearchContext.Provider>
  );
}
export default SearchProvider;
SearchProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
