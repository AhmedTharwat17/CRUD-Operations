const userSchema = require('../Model/userSchema')

module.exports = {
    create(req, res, next){
        const userProps = req.body
        userSchema.create(userProps)
        .then(users => res.status(201).send(users))
        .catch(next)
    },
    read(req, res, next){
      const count = parseInt(req.query.count) || ''
      userSchema.find({}).limit(count)
      .then(users => res.status(200).send(users))
      .catch(next)
    },
    update(req, res, next){
        const userId = req.params.id;
        const userProps = req.body
        userSchema.findByIdAndUpdate({_id: userId}, userProps)
        .then(()=> userSchema.findById({_id: userId}))
        .then(users => res.status(200).send(users))
        .catch(next)
    },
    delete(req, res, next){
        const userId = req.params.id;
        userSchema.findByIdAndRemove({_id: userId})
        .then(users => res.status(204).send(users))
        .catch(next)
    },
    details(req, res, next){
        const userId = req.params.id;
        userSchema.findById({_id: userId})
        .then(users => res.status(200).send(users))
        .catch(next)
    }
}
  