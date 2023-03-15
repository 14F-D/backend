

module.exports = (app) =>{
    const router = require('express').Router();
    
    
    const expenses =  require('../controllers/expenses.controller');
    router.get('/expenses/',expenses.getAllExpenses);
    router.get('/expenses/:id',expenses.getExpensesByUserId);
    router.post('/expenses/create',expenses.create);
    router.put('/expenses/update/:id',expenses.update);
    router.delete('/expenses/delete/:id',expenses.delete);
    
    
    const users =  require('../controllers/user.controller');
    router.get('/users',users.getAllUsers);
    router.post('/register',users.register);
    router.put('/users/:id',users.update);
    router.delete('/users/:id',users.delete);
    router.get('/users/:id',users.getUsersById);
    router.post('/login',users.login);
    router.post('/logout',users.logout);

    
    const incomes =  require('../controllers/incomes.controller');
    router.get('/incomes/',incomes.getAllIncomes);
    router.get('/incomes/:id',incomes.getIncomesByincomeId);
    router.post('/incomes/create',incomes.create);
    router.put('/incomes/update/:id',incomes.update);
    router.delete('/incomes/delete/:id',incomes.delete);

    app.use('/api',router)
}