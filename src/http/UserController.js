import {singleton, get, post, put, del, patch, authenticate} from "@fusion.io/proton";
import Authentication from "../auth/Authentication";
import Repository from "../shoesStore/credential/Repository";
import BcryptHasherAdapter from "../shoesStore/hasher/hasher";
import ProfileRepository from "../shoesStore/profile/ProfileRepository";

@singleton( ProfileRepository, Repository, BcryptHasherAdapter, Authentication )
export default class UserController  {
    constructor(reposProfile, repos, hasher, auth) {
        this.repos = repos;
        this.reposProfile = reposProfile;
        this.hasher = hasher;
        this.auth = auth;
    }
    @post('/login', authenticate('local'))
    async login(context) {
       await this.auth.attempt(context.request.body.username, context.request.body.password);
    }
    @get('/login', authenticate('local'))
    async login_local(context) {
        context.body = context.identity;
    }
    @post('/singup')
    async create(context ) {
        context.status = 201;
        let user = context.request.body;
        let password = await this.hasher.generate(user.password.toString(), 10);
        let users = await this.repos.create({username: user.username, password});
        let obj = {
            credential_id: users.id,
            name: users.username
        };
         await this.reposProfile.create(obj);
         context.body = users;
    }

    @get('/users')
    async get(context) {
        context.body = await this.repos.get();
    }
    @get('/users/:id')
    async detail(context) {
       const user = await this.repos.get({id: context.params.id, deleted_at: null});
       if (!user) {
           context.status = 404;
           return context.body = {
               message: "USER_NOTFOUND"
           }
       }
        return context.body = user;
    }
    @put('/users/:id')
    async update(context) {
        if (!await this.repos.get({id: context.params.id, deleted_at: null})) {
            context.status = 404;
            return context.body = {
                message: "USER_NOTFOUND"
            }
        }
        return context.body = await this.repos.update({id: context.params.id},context.request.body);
    }
    @patch('/users/:id')
    async del(context) {
        if (!await this.repos.get({id: context.params.id, deleted_at: null})) {
            context.status = 404;
            return context.body = {
                message: "USER_NOTFOUND"
            }
        }
        return context.body = await this.repos.delete({id: context.params.id});
    }

    @del('/users/:id')
    async destroy(context) {
        let rel = await this.repos.getDelete({id: context.params.id});
        if (!rel) {
            context.status = 404;
            return context.body = {
                message: "USER_NOTFOUND"
            }
        }
        return context.body = await this.repos.destroy({id: context.params.id});
    }

    @patch('/password/:id')
    async updatePassword(context) {
        context.body = await this.repos.updatePassword(context.params.id, context.request.body.password);
    }
}