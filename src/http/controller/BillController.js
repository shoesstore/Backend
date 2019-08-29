import {singleton, get, post, put, del} from "@fusion.io/proton";
import Repository                       from "../../shoesStore/bill/Repository";
import BillForm                         from "../middlewares/BillForm";

@singleton(Repository)
export default class BillController {
    constructor(repository) {
        this.repository = repository;
    }

    @get("/bills")
    async get (context) {
        const result = await this.repository.get({'deleted_at': null},"*");
        if (!result) {
            context.body = {
                message : "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }

    @get("/bills/:id")
    async detail (context) {
        const result = await this.repository.detail({
            id: context.params.id,
            deleted_at: null

        },"*");
        if (!result) {
            context.body = {
                message: "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }

    @post("/bills", new BillForm().handle)
    async create (context) {
        const result = await this.repository.create(context.request.body);
        if (!result) {
            context.body = {
                message: "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }

    @put("/bills/:id", new BillForm().handle)
    async update (context) {
        const result = await this.repository.update(context.request.body, {
            id: context.params.id,
            deleted_at: null
        });
        if (!result) {
            context.body = {
                message: "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }

    @del("/bills/:id")
    async delete (context) {
        const result = await this.repository.delete({id: context.params.id});
        if (!result) {
            context.body = {
                message: "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }
}
