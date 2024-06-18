const express = require('express')
const router = express.Router()

const path = require('path')
const UsersControllers = require('../controllers/UsersController')
const CategoriesController = require('../controllers/CategoriesController');
const GamesController = require('../controllers/GamesController');

// Rotas para usuarrios
router.get('/users',UsersControllers.showAll)
router.get('/users/:id',UsersControllers.show)
router.post('/users',UsersControllers.create)
router.put('/users/:id',UsersControllers.update)
router.delete('/users/:id',UsersControllers.delete)

// Rotas para categorias
router.get('/categories', CategoriesController.showAll);
router.get('/categories/:id', CategoriesController.show);
router.post('/categories', CategoriesController.create);
router.put('/categories/:id', CategoriesController.update);
router.delete('/categories/:id', CategoriesController.delete);

// Rotas para jogos
router.get('/games', GamesController.showAll);
router.get('/games/:id', GamesController.show);
router.post('/games', GamesController.create);
router.put('/games/:id', GamesController.update);
router.delete('/games/:id', GamesController.delete);



router.get ('/',(req, res)=> {
    res.send ("Olá Seres Humanos!!")
})
router.get ('/pages',(req, res)=> {
    res.sendFile(path.resolve('./pages/index.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./pages/404.html'))
})

module.exports = router