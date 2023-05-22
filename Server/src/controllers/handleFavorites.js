let myFavorites = [];

const postFav = (req,res) => {

    myFavorites.push(req.body); //llega el personaje por body y se lo pusheamos al arreglo
    return res.status(200).json(myFavorites); // retornamos el status 200 y el arreglo formato json

};

const deleteFav = (req, res)=>{

    const {id} = req.params // destructurin del id que llega por params
    const borrarFav = myFavorites.filter((char) => char.id !== +id); // guardamos todos exepto el que tiene el id que nos mandan por params
    myFavorites = borrarFav; // pisamos el arreglo por el nuevo arreglo sin el eliminado
    return res.status(200).json(myFavorites); //retornamos un status 200 y el array en formato json

};

module.exports = {
    postFav,
    deleteFav
}