import { singleton, get, post, inject} from "@fusion.io/proton";
import Repository from "../shoesStore/user/Repository";

@singleton()
export default class UserController  {
    @inject(Repository)
    @post('/users')
    async create(context, next, repository) {
        const user = context.request.body;
        const result = await repository.create(user);
        context.body = result;
    }
}