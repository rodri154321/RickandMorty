import SearchBar from '../components/SearchBar.jsx';
import { NavLink } from 'react-router-dom';
import style from '../styles/Nav.module.css';

function Nav({ onSearch }) {
    return (
        <div className={style.nav}>
            <div className={style.acomodar}>
                <NavLink to='/home'>
                    <button className={style.button}>HOME</button>
                </NavLink>
                <NavLink to='/favorites'>
                    <button className={style.button}>FAVORITES</button>
                </NavLink>
                <NavLink to='/about'>
                    <button className={style.button}>About</button>
                </NavLink>
                <div className={style.barra}>
                    <SearchBar onSearch={onSearch} />
                </div>
            </div>
        </div>
    )
};

export default Nav