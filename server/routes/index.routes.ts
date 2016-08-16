import { Router, Request, Response } from 'express';
import { UserModel as User, UserLogic } from '../index'


const router: Router = Router()
const users = new UserLogic()

router.route( '/' )

<<<<<<< HEAD
    user.save()
      .then(() => {
        let userPromise = User.find().exec()

        userPromise.then(( user ) => {
          res.send( user )
        })
      })
=======
  .post(( req: Request, res: Response ) => {
    let userName: string = req.body.name
    users.createNewUser( userName ).then(() => {
      users.getAllUsers.then(( users ) => res.send( users ))
    })
>>>>>>> 23e84e8c32e8bba1fb0ffab81fbf050ad08814d9
  })

  .get(( req: Request, res: Response ) => {
    users.getAllUsers.then(( users ) => res.send( users ))
  })


export { router }
