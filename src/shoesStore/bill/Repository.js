import Factory from "./Factory";
import {singleton} from "@fusion.io/core";
import {DatabaseManager} from "@fusion.io/integrations-knex";
import moment from "moment";

@singleton(DatabaseManager)
export default class Repository {
    constructor (dbm) {
        this.dbm = dbm.connection();
    }

    get tableName () {
        return "bill";
    }

    get returningColumn () {
            return ["id", "profile_id", "order_date", "payment_method", "order_notes", "status", "shipped_date"
                   , "customer_name", "address", "phone", "created_at", "updated_at", "deleted_at"];
    }

    async create (object) {
        let Object = Factory.make(object);
        const result = await this.dbm.insert(Object).into(this.tableName).returning(this.returningColumn);
        return Factory.build(result[0])
    }

    async update (object, condition) {
        const Object = Factory.update(object);
        const result = await this.dbm(this.tableName).where(condition).update(Object)
            .returning(this.returningColumn);
        return Factory.build(result[0]);
    }

    async get (condition, selection) {
        const query = await this.dbm.select(selection).from(this.tableName).where(condition);
        return Factory.builds(query)
    }

    async detail (condition, selection) {
        const query = await this.dbm.select(selection).from(this.tableName).where(condition).first();
        return Factory.build(query);
    }

    async delete (condition) {
        const result = await this.dbm(this.tableName)
            .where(condition)
            .update('deleted_at', moment().toDate())
            .returning(this.returningColumn);

        return Factory.build(result[0]);
    }
}
