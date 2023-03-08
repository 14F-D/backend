

module.exports = (app) =>{
    const router = require('express').Router();
    
    
    const expenses =  require('../controllers/expenses.controller');
    router.get('/expenses/',expenses.getAllExpenses);
    router.get('/expenses/:id',expenses.getExpensesByUserId);
    router.post('/expenses',expenses.create);
    
    
    const users =  require('../controllers/user.controller');
    router.get('/users',users.getAllUsers);
    router.post('/register',users.register);
    router.put('/users/:id',users.update);
    router.delete('/users/:id',users.delete);
    router.get('/users/:id',users.getUsersById);
    router.post('/login',users.login);
    router.post('/logout',users.logout);


    app.use('/api',router)
}