const FilmService = require('../services/FilmServices');

const filmService=new FilmService();

class FilmController {
    async create(req, res) {
        try {
            const film = await filmService.create(req.body);
            return res.json(film);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getAll(req, res) {
        try {
            const films = await filmService.getAll();
            return res.json(films);
        } catch (error) {
            res.status(403).json(error);
        }
    }
}

module.exports = FilmController;