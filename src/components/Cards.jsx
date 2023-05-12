import style from '../styles/Cards.module.css';
import Card from './Card';

export default function Cards(props) {
   const { characters, onClose } = props;
   return (
      <div className={style.div}>
         {characters.map(element => {
            return (
               <Card
                  id={element.id}
                  name={element.name}
                  status={element.status}
                  species={element.species}
                  gender={element.gender}
                  origin={element.origin.name}
                  image={element.image}
                  onClose={onClose}
                  key={element.id}
               />
            )
         })}
      </div>
   )
};
