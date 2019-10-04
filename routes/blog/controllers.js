const db = require("../../db/models")

const {blog} = db

module.exports = {
    getBlog:(req, res) => {
        blog.findAll()
        .then(result => res.send(result))
        .catch(error => res.send(error))
    },
    postBlog: (req, res) => {
        blog.create(req.body)
          .then(result => {
            res.send(result);
          })
          .catch(error => res.send(error));
      }
}