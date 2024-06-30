const express = require ("express");
const app = express();
const path = require("path");

const publicPath = path.resolve(__dirname, `./public`)
app.use(express.static(publicPath));

const PORT = 3030;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/home.html`)) 
});  

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/login.html`)) 
});  

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, `./views/register.html`))
}); 
 

