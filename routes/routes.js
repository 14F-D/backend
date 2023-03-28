const {userAuth,adminAuth} = require('../auth')

module.exports = (app) =>{
    const router = require('express').Router();
    
    
    const expenses =  require('../controllers/expenses.controller');
    router.get('/expenses/',adminAuth,expenses.getAllExpenses);
    router.get('/expenses/:id',userAuth,expenses.getExpensesByUserId);
    router.post('/expenses/create',userAuth,expenses.create);
    router.put('/expenses/update/:id',userAuth,expenses.update);
    router.delete('/expenses/delete/:id',userAuth,expenses.delete);
    
    
    const users =  require('../controllers/user.controller');
    router.get('/users',adminAuth,users.getAllUsers);
    router.post('/register',users.register);
    router.put('/users/:id',userAuth,users.update);
    router.delete('/users/:id',userAuth,users.delete);
    router.get('/users/:id',adminAuth,users.getUsersById);
    router.post('/login',users.login);
    router.post('/logout',users.logout);

    
    const incomes =  require('../controllers/incomes.controller');
    router.get('/incomes/',adminAuth,incomes.getAllIncomes);
    router.get('/incomes/:id',userAuth,incomes.getIncomesByUserId);
    router.post('/incomes/create',userAuth,incomes.create);
    router.put('/incomes/update/:id',userAuth,incomes.update);
    router.delete('/incomes/delete/:id',userAuth,incomes.delete);

    app.use('/api',router)
}
