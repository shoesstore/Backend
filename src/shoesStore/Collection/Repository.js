import Factory             from "./Factory";
import moment              from "moment";
import { singleton }       from "@fusion.io/proton";
import { DatabaseManager } from "@fusion.io/integrations-knex";


@singleton(DatabaseManager)
export default class CollectionRepository {
    constructor (database) {
        this.connection = database.connection();
    }

    get tableName () {
        return "collections";
    }

    get returningColumn () {
        return ["id", "name", "slug", "related_slugs", "created_at", "updated_at", "deleted_at"];
    }

    async create (object) {
        const collection = Factory.make(object);
        const result = await this.connection.insert(collection).into(this.tableName).returning(this.returningColumn);
        return Factory.build(result[0]);
    }

    async detail (condition, selection = this.returningColumn) {
        const result = await this.connection.select(selection).from(this.tableName).where(condition).first();
        return Factory.build(result);
    }

    async update (condition, object) {
        const collection = Factory.make(object);
        const result = await this.connection.update(collection).where(condition).from(this.tableName).returning(this.returningColumn);
        return Factory.update(result[0]);
    }

    async delete (condition) {
        return this.connection.update({
            deleted_at: moment().toDate()
        }).where(condition).from(this.tableName)
    }

    async destroy (condition) {
        return this.connection(this.tableName).where(condition).del()
    }

    async restore (condition) {
        return this.connection.update({
            deleted_at: null
        }).where(condition).from(this.tableName);
    }

    async get (condition, selection = this.returningColumn) {
        const query = await this.connection.select(selection).from(this.tableName).where(condition).limit().offset();
        return Factory.builds(query);
    }
}
