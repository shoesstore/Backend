import {singleton} from "@fusion.io/core";
import Repository from "../credential/Repository";
import BcryptHasherAdapter from "../hasher/hasher";

@singleton( Repository, BcryptHasherAdapter )
export default class Authentication {
    constructor( repos, hasher ) {
        this.repos = repos;
        this.hasher = hasher;
    }
    async attempt(username, password) {
        const attemptUser = await this.repos.get({username});
        if (!attemptUser[0]) {
            throw new Error("Wrong Username ");
        } else {
            let pass = await attemptUser[0].password.toString();
            if (await this.hasher.check(password.toString(), pass)) {
                return attemptUser[0].id;
            } else {
                throw new Error("Wrong Pass");
            }
        }
    }
    }