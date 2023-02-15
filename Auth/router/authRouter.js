const Router = require("express")
const router = new Router()
const authController = require("../controller/authController")
const authMiddleware = require("../middleware/authMiddleware")

const {check} = require("express-validator")

const controller = new authController()

router.post('/registration', 
            [
                check('username','username cannot be empty').notEmpty(),
                check('password','password must be 4-10 characters long ').isLength({min:4, max:10}),
            ],
            controller.registration);

router.post('/login',controller.login);

router.get('/users',authMiddleware,controller.getUsers);



module.exports = router