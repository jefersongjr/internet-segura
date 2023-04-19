import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function CartProvider({ children }) {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState();

    const contextSearch = useMemo(() => ({
      orders,
      total,
      setOrders,
      setTotal,
    }), []);
    return (
      <SearchContext.Provider value={ contextSearch }>
        { children }
      </SearchContext.Provider>
    );
  }
  export default CartProvider;
  CartProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
  }.isRequired;