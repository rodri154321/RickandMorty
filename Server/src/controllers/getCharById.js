const axios = require('axios');
const url = "https://rickandmortyapi.com/api/character/";

const getCharById = (req,res) => {
    const {id} = req.params;    //destructuramos el id que viene por parametro
    axios.get(url + id) // acemos una peticion a la api de la url + el id que resive por parametro
    .then((result) => result.data)
    .then((data) =>{
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.writeHead(200,{"Content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch((error) =>{
        res.writeHead(500,{"Content-Type": "text/plain"})
        res.end(error.message)
    })
}

module.exports = {
    getCharById
}