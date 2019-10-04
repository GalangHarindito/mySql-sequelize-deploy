const db = require("../../db/models")

const {admin} = db



module.exports = {
    getAdmin:(req, res) => {
        admin.findAll({
          include:[
            {
              model:db.blog
            }
          ]
        })
        .then(result => res.send(result))
        .catch(error => res.send(error))
    },
    postAdmin: (req, res) => {
        admin.create(req.body)
          .then(result => {
            res.send(result);
          })
          .catch(error => res.send(error));
      }
}