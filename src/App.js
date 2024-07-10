import './App.css'; 
import Header from "./Componentes/Header/Header.jsx"; 
import Footer from "./Componentes/Footer/Footer.jsx";
import { useState } from 'react'; 
import axios from 'axios';


function App() { 

  const [respuesta, setRespuesta] = useState([]);  
  const [search, setSearch] = useState(""); 
  const [selectValue, setSelectValue] = useState("");

  const APIKEY = "ZoUk9zvg5xX26Mq6HByavvIyU3KXCPdK"; 
  
  const BuscarGift = `https://api.giphy.com/v1/gifs/search?api_key=ZoUk9zvg5xX26Mq6HByavvIyU3KXCPdK&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`; 
  const GifURL = "https://api.giphy.com/v1/gifs/trending?api_key=ZoUk9zvg5xX26Mq6HByavvIyU3KXCPdK	";
  const StickerURL = "https://api.giphy.com/v1/stickers/trending?api_key=ZoUk9zvg5xX26Mq6HByavvIyU3KXCPdK"; 
  const URL = "https://api.giphy.com/v1/gifs/search?api_key=ZoUk9zvg5xX26Mq6HByavvIyU3KXCPdK&q=&limit=25";


  const handleInputSearch = (event) => { 
    setSearch(event.target.value); 
  } 

  const handleChange = (event) => { 
    setSelectValue(event.target.value); 
  } 
   

  const click = async () => { 

    const endpoint = 'https://api.giphy.com/v1/gifs/search';
    const params = {
      api_key: APIKEY,
      q: search,
      limit: 10,
    };

    try {
      const response = await axios.get(endpoint, { params });
      setRespuesta(response.data.data);
    } catch (error) {
      console.error('Error fetching data from Giphy API', error);
    }
  }


  return (
    <div className="App"> 
    <Header />
      
      <div> 

        <div className='mainOne'> 
          <div className='buscar'> 
            <input 
              type='text'  
              placeholder="Buscar..... "
              value={search} 
              onChange={handleInputSearch} 
            /> 
            <button onClick={click}>Buscar</button> 
          </div>
        </div> 

        <div className='container'> 
          {respuesta.map((respuest) => (
            <div key={respuest.id}>
              <img src={respuest.images.fixed_height.url} alt={respuest.title} />
            </div>
          ))}
          
        </div>
        
      </div>

    <Footer />
    </div>
  );
}

export default App;
