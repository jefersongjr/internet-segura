import { useEffect, useState } from "react";
import axios from 'axios';

function Search() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('https://internet-segura-api.vercel.app/dados')
      .then((res) => {
      setData(res)
    } );
  },[])
  return (
    <div className="Search">
       <button>Criança</button>
       {console.log(data)}
       <button>Adolescente</button>
    </div>
  )
}

export default Search;