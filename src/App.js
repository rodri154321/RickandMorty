import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail';
import About from './components/About';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import Form from './components/Form.jsx';


function App() {
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false);
   const email = "rodri154321@gmail.com";
   const password = "hola123";

   const navigate = useNavigate();
   
   function login(userData) {
      if (userData.password === password && userData.email === email) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const {pathname} = useLocation();
   
   const onSearch = (id) =>{
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   const onClose = (id) =>{
      setCharacters(
      characters.filter((char)=>{
         return char.id !== Number(id);
      }))
   };
        
   return (
      <div className='App'>
         {pathname !== '/' ? <Nav onSearch={onSearch}/> : ""}
         <Routes>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
