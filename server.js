const express = require("express");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect");
let userRoutes = require("./Routes/userRoutes");
let postRoutes = require("./Routes/postRoutes");
let commentRoutes = require("./Routes/commentRoutes");




// parse requests of content-type -
// application/json

app.use(express.json());
app.get("/", (req, res) => { res.json({ message: "Welcome to my MongoDB application." });
});
app.get("/api/test", (req, res) => { res.json({ message: "TEST API." });
});
app.use('/api/users', userRoutes);

app.use('/api/posts', postRoutes);

app.use('/api/comments', commentRoutes);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`); });
