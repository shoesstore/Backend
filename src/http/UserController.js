import { singleton, get, post, put, del } from "@fusion.io/proton";
import Repository from "../shoesStore/user/Repository";

@singleton( Repository )
export default class UserController  {
    constructor(repos) {
        this.repos = repos;
    }
    @post('/users')
    async create(context, next ) {
        const user = context.request.body;
        const result = await this.repos.create(user);
        context.body = result;
    }

    @get('/users')
    async get(context, next) {
        const result = await this.repos.get();
        context.body = result;
    }
    @get('/users/:id')
    async detail(context) {
        const result = await this.repos.get({id: context.params.id, deleted_at: null});
        context.body = result;
    }
    @put('/users/:id')
    async update(context) {
        const result = await this.repos.update({id: context.params.id},context.request.body);
        context.body = result;
    }
    @del('/users/:id')
    async del(context) {
        const result = await this.repos.delete({id: context.params.id});
        context.body = result;
    }


}