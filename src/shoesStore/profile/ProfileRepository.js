import { DatabaseManager } from "@fusion.io/integrations-knex";
import {singleton} from "@fusion.io/core";
import Factory from "./Factory";

@singleton( DatabaseManager )
export default class ProfileRepository {
    constructor( dbm ) {
        this.dbm = dbm;
    }
    get tableName () {
        return "profiles";
    }

    get returningColumn () {
        return ["id", "name", "address", "phone", "gender", "avatar", "created_at","email"];
    }
    async create(obj) {
        const profile =  Factory.make(obj);
        const result = await this.dbm.connection()
            .insert(profile)
            .into(this.tableName)
            .returning(this.returningColumn);
        return Factory.build(result[0]);
    }
}