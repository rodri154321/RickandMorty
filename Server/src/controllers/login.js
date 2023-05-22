const users = require('../utils/users')

const login = (req, res) =>{

    const {email, password} = req.query

   const acceso = users.find((user)=> user.email === email && user.password === password)
    acceso ? res.status(200).json({access: true}) : res.status(500).json({access: false})

};

module.exports ={
    login
}