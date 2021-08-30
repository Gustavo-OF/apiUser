import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);
    if (user) {
      if (user.admin === false) {
        throw new Error("User is not an Admin!");
      } else {
        return this.usersRepository.list();
      }
    } else {
      throw new Error("User not found!");
    }
  }
}

export { ListAllUsersUseCase };
