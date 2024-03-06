var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/calculate', function(req, res, next) {
    const peso = req.body.weight
    const altura = req.body.height

    const imc = (peso/altura) /altura
    let descricao = ""
    
    if(imc < 18.5){
        descricao = "Baixo peso"
    }else if(imc >= 18.5 || imc <= 24.99){
        descricao = "Normal"
    }else if(imc >= 25 || imc <= 29.99){
        descricao = "SobrePeso"
    }else if(imc > 30){
        descricao = "Obesidade"
    }

    const bodyReturn = {
        height : altura,
        weight : peso,
        imc : imc,
        imcDescription : descricao
    }

    res.send(bodyReturn);
});

module.exports = router;
