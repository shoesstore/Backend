import {singleton} from "@fusion.io/core";
import {DatabaseManager} from "@fusion.io/integrations-knex";
import Factory from "./Factory";

@singleton( DatabaseManager)
export default class Repository{
    constructor( dbm ) {
        this.dbm = dbm;
    }
    get tableName () {
        return "credential";
    }

    get returningColumn () {
        return ["id", "username"];
    }
    async create(object) {
        let user = Factory.make(object);
        console.log(user);
        let result = await this.dbm.connection()
            .insert({
            username: user.username,
            password: user.password,
            created_at: new Date()
        })
            .into(this.tableName)
            .returning(this.returningColumn);
        return Factory.build(result[0]);
    }

}