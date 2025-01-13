const express = require("express");
const users = require("./DATA.json");
const app = express();

app.get("/users", function(req, res) {
        return res.json(users)
    })
app.get("/user", function(req, res) {
    const html=`<ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>`
    res.send(html)
})

app.listen(3000);