const express = require("express");
const users = require("./DATA.json");
const app = express();

app.get("/users", function(req, res) {
        return res.json(users)
    })
// app.get("/user", function(req, res) {
//     const html=`<ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
//     </ul>`
//     res.send(html)
// })

app.get("/users/:id",function(req,res){
    const id=Number(req.params.id)
    const user = users.find((user)=>user.id===id)
    return res.json(user);
})

app.listen(3000);