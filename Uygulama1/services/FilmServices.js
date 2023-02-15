const Film = require('../model/Film');

class filmService{
    async create(film){
        try {
            const myfilm = await Film.create(film);
            return myfilm;
        } catch (error) {
            throw error;
        }
    }

    async getAll(){
        try {
            const films = await Film.find();
            return films;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = filmService;