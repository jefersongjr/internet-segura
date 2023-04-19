import React, { useMemo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';
import axios from 'axios';

function SearchProvider({ children }) {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);
  
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
    }), [data, search]);
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