const db = require("../../db/models");

const { admin } = db;

module.exports = {
  getAdmin: (req, res) => {
    admin
      .findAll({
        include: [
          {
            model: db.blog
          }
        ]
      })
      .then(result => res.send(result))
      .catch(error => res.send(error));
  },
  postAdmin: (req, res) => {
    admin
      .create(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  getAdminById: (req, res) => {
    console.log(req.body);
    admin
      .findAll({
        where: { id: req.params.id },
        include: [
          {
            model: db.blog
          }
        ]
      })
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  deleteAdmin: (req, res) => {
    admin
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => {
        res.send({ message: `your data with id ${req.params.id} deleted` });
      })
      .catch(error => res.send(error));
  },
  putAdmin: (req, res) => {
    admin.update(
      {
        name: req.body.name,
        email: req.body.email,
        password :req.body.password,
        gender :req.body.gender,
        address:req.body.address,
        occupation : req.body.occupation
      },
      {
        where: { id: req.params.id }
      }
    )
    .then(result => {
      res.send(result);
    })
    .catch(error => res.send(error));
  }
};
