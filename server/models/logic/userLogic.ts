import { UserModel as User } from '../user';


export class UserLogic {

  public getAllUsers = User.find().exec()

  public createNewUser( name: string ) {
    let user = new User( { name })
    return user.save
  }

}
