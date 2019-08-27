import Factory             from "./Factory";
import moment              from "moment";
import { singleton }       from "@fusion.io/proton";
import { DatabaseManager } from "@fusion.io/integrations-knex";


@singleton(DatabaseManager)
export default class ModelProductRepository {
    constructor (database) {
        this.connection = database.connection();
    }

    get tableName () {
        return "models";
    }

    get returningColumn () {
        return [
            "id", "name", "model_id",
            "price", "status", "slug", "sizes",
            "colors", "images", "tags", "description"
        ];
    }

    async create (object) {
        const model = Factory.make(object);
        const result = await this.connection.insert(model).into(this.tableName).returning(this.returningColumn);
        return Factory.build(result[0]);
    }

    async detail (condition, selection = this.returningColumn) {
        const result = await this.connection.select(selection).from(this.tableName).where(condition).first();
        return Factory.build(result);
    }

    async update (condition, object) {
        const model = Factory.make(object);
        const result = await this.connection.update(model).where(condition).from(this.tableName).returning(this.returningColumn);
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
