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
        return ["id", "username", "password"];
    }
    async create(object) {
        let user = await Factory.make(object);
        let result = await this.dbm.connection()
            .insert(user)
            .into(this.tableName)
            .returning(this.returningColumn);

        return Factory.build(result[0]);
    }

    async get( condition = {deleted_at: null}, selection = this.returningColumn) {
        return this.dbm.connection().select(selection).from(this.tableName).where(condition);
    }

    async getDelete(condition ) {
        return this.dbm.connection().select('*').from(this.tableName).whereNotNull('deleted_at').andWhere(condition).first();
    }

    async update(condition, object) {
        const user = Factory.update(object);
        return this.dbm.connection().update(user).where(condition).from(this.tableName).returning(this.returningColumn);
    }

    async delete(condition) {
        return this.dbm.connection().update('deleted_at', new Date()).from(this.tableName).where(condition).returning(this.returningColumn);
    }
    async destroy(condition) {
        return this.dbm.connection().from(this.tableName).where(condition).del();
    }
    async updatePassword(id, pass) {
        return this.dbm.connection().update('password', pass).from(this.tableName).where('id', id).returning(this.returningColumn);
    }
}