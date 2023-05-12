import style from '../styles/Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites }) {

   const [isFav, setFavs] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image} );
      setFavs(!isFav);
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.card}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.cerrar} onClick={() => { onClose(id) }}>X</button>
         <h2>Name: {name}</h2>
         <img src={image} alt='' />
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin:{origin.name}</h2>
         <Link to={`/detail/${id}`} >
            <button>detail</button>
         </Link>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (characters) => dispatch(addFav(characters)),
      removeFav: (id) => dispatch(removeFav(id)),
   }
};

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)