export default (data) => {
    let error = {};

    if (!data.email.includes('@')) {
        error.e = 'Email no valido'
    }
    if (!data.email) {
        error.e = 'ingrese un email'
    }
    if (data.email.length > 35) {
        error.e = 'Debe tener menos de 35 caracteres'
    }
    if (!error.e) {
        if (!/\d/.test(data.password)) {
            error.p = 'la contraseña debe contener por lo menos un numero'
        }
        if (data.password.length > 10 || data.password.length < 6) {
            error.p = 'la contraseña debe tener entre 6 y 10 caracteres'
        }
    }
    return error;
}