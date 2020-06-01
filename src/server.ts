import express from 'express';

const app = express();

app.get("/users", (request, response)=>{
    console.log("Listagem de usuários");
    //response.send("E aí jovem!");
    response.json(['Saitama', 'Mobi', 'Goku', 'Tobirama', 'Yusuki']);
});

app.listen(2023);