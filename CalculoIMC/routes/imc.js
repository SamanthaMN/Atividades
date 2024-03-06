var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/calculate', function(req, res, next) {
    const peso = req.body.weight
    const altura = req.body.height

    const imc = (peso/altura) /altura

    const bodyReturn = {
        height : altura,
        weight : peso,
        imc : imc,
        imcDescription : "blabla"
    }

    res.send(bodyReturn);
});

module.exports = router;
