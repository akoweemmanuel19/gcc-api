const db = require("../models");
const User = db.db.utilisateurs;
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../config/private_key')

module.exports = (req, res) => {

    User.findOne({
        where: { username: req.body.username },
    })
        .then(user => {

            bcrypt.compare(req.body.password, user.password).then(isPasswordValid => {
                if (!isPasswordValid) {
                    const message = 'Mot de passe incorrect'
                    return res.status(401).json({ message })
                }

                //JWT
                const token = jwt.sign(
                    { userId: user.id },
                    privateKey,
                    { expiresIn: '24h' }
                )

                const u_s = {
                    nom: user.nom,
                    prenom : user.prenom,
                    email: user.email,
                    username: user.username
                }
                const mylogindata = {
                    user: u_s
                }

                const message = `L'utilisateur s'est connecté avec succès`;
                return res.json({ message, data: mylogindata, token })
            })

        })
        .catch(
            error => {
                const message = 'La connexion a echoue'
                return res.json({ message, data: error })
            }
        )
}