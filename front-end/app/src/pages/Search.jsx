import { useEffect, useState } from "react";
import axios from 'axios';

function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://internet-segura-api.vercel.app/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  

  return (
    <div className="Search">
      <button>Criança</button>
      <button>Adolescente</button>
    </div>
  )
}

export default Search;