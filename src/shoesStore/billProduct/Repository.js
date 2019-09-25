import Factory from "./Factory";
import {singleton} from "@fusion.io/core";
import {DatabaseManager} from "@fusion.io/integrations-knex";
import moment from "moment";


@singleton(DatabaseManager)
export default class Repository {
    constructor(dbm) {
        this.dbm = dbm.connection();
    }

    get tableName() {
        return "bill_products"
    }

    get returningColumn() {
        return ["id", "bill_id", "product_id", "quantity", "price", "name", "size", "color", "created_at",
            "updated_at", "deleted_at"];
    }

    async create (object) {
        let Object = Factory.make(object);
        const result = await this.dbm.insert(Object).into(this.tableName).returning(this.returningColumn);
        return Factory.build(result[0]);
    }

    async update (object, condition) {
        let Object = Factory.update(object);
        const result = await this.dbm(this.tableName).where(condition).update(Object)
            .returning(this.returningColumn);

        return Factory.build(result[0]);

    }

    async get (selection, condition) {
        const results = await this.dbm.select(selection).from(this.tableName).where(condition);
        console.log(results);
        return Factory.builds(results)
    }

    async detail (selection, condition) {
        const result = await this.dbm.select(selection).from(this.tableName).where(condition).first();
        return Factory.build(result);
    }

    async delete (condition) {
        const result = await this.dbm(this.tableName)
            .where(condition)
            .update('deleted_at', moment().toDate())
            .returning(this.returningColumn);

        return Factory.build(result[0]);
    }
}
