var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/enquete", function (req, res) {
    usuarioController.enquete(req, res);
})

router.post("/acionargrafico", function (req, res) {
    usuarioController.acionargrafico(req, res);
})
router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});


router.get("/listarformulario", function(req,res){
    usuarioController.listarformulario(req,res);
    console.log("route")
})

module.exports = router;