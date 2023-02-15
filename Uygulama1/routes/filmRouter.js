const {Router} = require('express');
const router = Router();
const FilmController = require('../controller/FilmController');

const filmController = new FilmController();

router.post('/films/create', filmController.create);

router.get('/films/getAll', filmController.getAll);

module.exports=router;

