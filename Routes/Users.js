const userController = require('../Controller/userControl')

module.exports = (app) => {
    //Hpme page
    app.get('/', (req, res)=>{
        res.send('Welcome user');
    })
    //create
    app.post('/users', userController.create)
    // Read
    app.get('/users', userController.read)
    // update
    app.put('/users/:id', userController.update)
    // delete
    app.delete('/users/:id', userController.delete)
    // details
    app.get('/users/:id', userController.details)
}