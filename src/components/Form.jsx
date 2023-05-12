import style from "../styles/Form.module.css"
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {

    const [userData, setUserData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
        setErrors(validation({ ...userData, [event.target.name]: event.target.value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    };

    return (
        <div name='mas grande' className={style.alinear}>
            <div className={style.card}>
                <div className={style.cardDetails}>
                    <img className={style.imagen} src="https://i.ibb.co/VYnKRRM/user-photo.png" />
                    <form action="">
                        <div className={style.inputContainer}>
                            <label htmlFor="email"> Email: </label>
                            <input className={style.SearchBar} onChange={handleChange} value={userData.email} type="email" name="email" />
                            <label htmlFor="password">Password</label>
                            <input className={style.SearchBar} onChange={handleChange} value={userData.password} type="password" name="password" />
                        </div>
                        {errors.e ? <p className={style.errores}>{errors.e}</p>: ''}
                        {errors.p ? <p className={style.errores}>{errors.p}</p >: ''}
                        <div>
                            <button className={style.cardButton} onClick={handleSubmit} type="submit">ingresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

};

export default Form;