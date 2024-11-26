import express from "express";

// import conectarAoBanco from "./src/config/dbConfig.js";
// const conexao = await conectarAoBanco (process.env.STRING_CONEXAO);

import routes from "./src/routes/postsRoutes.js";

const app =  express()
app.use(express.static("uploads"));

routes(app);

// app.use (express.json())

// console.log(process.env.STRING_CONEXAO)

// const posts = [
//         {id: 1
//     ,    descricao: "Uma foto 01"
//     ,    imagem: "https://placecats.com/millie/300/150"}

//     ,   {id: 2
//     ,    descricao: "Uma foto 02"
//     ,    imagem: "https://placecats.com/millie/300/150"}

//     ,   {id: 3
//     ,    descricao: "Uma foto 03"
//     ,    imagem: "https://placecats.com/millie/300/150"}

//     ,   {id: 4
//     ,    descricao: "Uma foto 04"
//     ,    imagem: "https://placecats.com/millie/300/150"}

//     ,   {id: 5
//     ,    descricao: "Uma foto 05"
//     ,    imagem: "https://placecats.com/millie/300/150"}

// ];

app.listen(27015, () => {
    console.log("Servidor escutando!")
});


// app.get("/api", (req, res) => {
//     res.status(200).send("Rota Inicial!");
// });

// async function getTodosPosts () {
//     const db = conexao.db("estudos");
//     const colecao = db.collection("posts");

//     return colecao.find().toArray();
// }

// app.get("/posts", async (req, res) => {
//     // res.status(200).json(posts);

//     const posts = await getTodosPosts();
//     res.status(200).json(posts);
// });

// function buscaPostID (id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// };

// app.get("/posts/:id", (req, res) => {
//     const index = buscaPostID(req.params.id);
//     res.status(200).json(posts[index]);
// });