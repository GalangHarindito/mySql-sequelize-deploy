const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const adminRouter = require("./routes/admin/index")
const blogRouter = require("./routes/blog/index")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .then(() => {
//     User.sync().then(() => console.log(`table created`));
//   })
//   .catch(err => {
//     console.error("Unable to connect to the database:", err);
//   });

app.get("/", (req, res) => res.send("Hallo"));
app.use("/admin", adminRouter)
app.use("/blog", blogRouter)

app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));