const db = require("../../db/models");

const { blog } = db;

module.exports = {
  getBlog: (req, res) => {
    blog
      .findAll()
      .then(result => res.send(result))
      .catch(error => res.send(error));
  },
  postBlog: (req, res) => {
    blog
      .create(req.body)
      .then(result => {
        res.send(result);
      })
      .catch(error => res.send(error));
  },
  putBlog: (req, res) => {
    blog.update(
      {
        title: req.body.title,
        body: req.body.body
     
      },
      {
        where: { id: req.body.id }
      }
    )
    .then(result => {
      res.send(result);
    })
    .catch(error => res.send(error));
  },
  deleteBlog: (req, res) => {
    blog.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        res.send({ message: `your data with id ${req.body.id} deleted` });
      })
      .catch(error => res.send(error));
  }
};
