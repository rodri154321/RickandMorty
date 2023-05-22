import style from '../styles/Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';
import { useState, useEffect } from 'react';

function Card({ id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites }) {

   const [isFav, setFavs] = useState(false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({ id, name, status, species, gender, origin, image });
      setFavs(!isFav);
   };

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFavs(true);
         }
      });
   }, [myFavorites]);

   const { pathname } = useLocation();

   return (
      <div className={style.content}>
         <div className={style.card}>
            <div className={style.card2}>
               <div>
                  {
                     isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                     ) : (
                        <button onClick={handleFavorite}>🤍</button>
                     )
                  }
                  {pathname !== '/favorites' ? <button className={style.cerrar} onClick={() => { onClose(id) }}>X</button> : ""}
               </div>
               <Link to={`/detail/${id}`} >
                  <h2 className={style.text.title}>{name}</h2>
               </Link>
               <img className={style.img} src={image} alt='' />
               <div className={style.content}>
               <h2 className={style.text}>Status: {status}</h2>
               <h2 className={style.text}>Species: {species}</h2>
               </div>
               <div className={style.content}>
               <h2 className={style.text}>Gender: {gender}</h2>
               <h2 className={style.text}>Origin:{origin.name}</h2>
               </div>

            </div>
         </div>
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
   return {
      myFavorites: state.myFavorites
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)