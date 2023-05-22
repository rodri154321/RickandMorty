import style from '../styles/SearchBar.module.css';
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const [id,setid] = useState('');

   const handleChange = (event) => {
      setid(event.target.value)
   };
   return (
      <div className={style.SearchBar}>
         <input placeholder='Ingrese un Id' className={style.input} type='search' onChange={handleChange} value={id}/>
         <button className={style.button} onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   )
};
