var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

var mongoose = require('mongoose');
var Imovel = require('./ImovelSchema');

const app = express();
 
/* requisitar todos items imobiliários */
router.get('/', function(req, res, next) {
  Imovel.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* requisitar o id de um único item imobiliário */
router.get('/:id', function(req, res, next) {
  Imovel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Salvar item */
router.post('/', function(req, res, next) {
  Imovel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Editar item */
router.put('/:id', function(req, res, next) {
  Imovel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Deletar item */
router.delete('/:id', function(req, res, next) {
  Imovel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;