import { useEffect, useState } from "react";
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);


  useEffect(() => {
    axios.get('https://internet-segura-api.vercel.app/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleClick = ({ target }) => {
    const { innerText } = target;
    const filter = data.filter((type) => type.faixa_etaria === innerText.toLowerCase());
    console.log(filter);
    setSearch(filter);
  }
  
  return (
    <div className="Search">
      <button
        onClick={(e) => handleClick(e)}
      >
        Criança
      </button>
      <button
        onClick={(e) => handleClick(e)}
      >
        Adolescente</button>
    </div>
  )
}

export default Search;