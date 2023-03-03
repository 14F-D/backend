

module.exports = (app) =>{
    const router = require('express').Router();
    const users =  require('../controllers/user.controller');

    router.get('/',users.getAllUsers);
    router.post('/',users.create);
    router.put('/:id',users.update);
    router.delete('/:id',users.delete);
    router.get('/:id',users.getUsersById);


    app.use('/api/users',router)
}