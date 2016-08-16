import { Router, Request, Response } from 'express';
import { UserModel as User } from '../index'


const router: Router = Router()

router.route( '/' )
  .post(( req: Request, res: Response ) => {
    let userName: string = req.body.name
    let user = new User( { name: userName })
    user.save().then(( user )=>{
      let getAllUsers = User.find().exec()
      getAllUsers.then(( users ) => 
        res.send(users)
      )
    })
  })
  .get(( req: Request, res: Response ) => {
    let users = User.find().exec()
    users.then(( users ) => res.send( users ))
  })


export { router }
