import { Router, Request, Response } from 'express';
import { UserModel as User, UserLogic } from '../index'


const router: Router = Router()
const users = new UserLogic()

router.route( '/' )

  .post(( req: Request, res: Response ) => {
    let userName: string = req.body.name
    users.createNewUser( userName ).then(() => {
      users.getAllUsers.then(( users ) => res.send( users ))
    })
  })

  .get(( req: Request, res: Response ) => {
    users.getAllUsers.then(( users ) => res.send( users ))
  })


export { router }
