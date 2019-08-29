import {singleton, get, post, put, del} from "@fusion.io/proton";
import Repository from "../shoesStore/billProduct/Repository";
import BillProductForm from "./middlewares/BillProductForm";

@singleton(Repository)
export default class BillController {
    constructor(repository) {
        this.repository = repository;
    }

    @get("/bills/products")
    async get (context) {
        const result = await this.repository.get("*",{'deleted_at': null});
        if (!result) {
            context.body = {
                message : "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }

    @get("/bills/products/:id")
    async detail (context) {
        const result = await this.repository.detail("*",{
            deleted_at: null,
            id: context.params.id
        });
        if (!result) {
            context.body = {
                message: "Resource Not Found"
            }
        } else {
            context.body = result;
        }
    }

    @post("/bills/products", new BillProductForm().handle)
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

    @put("/bills/products/:id", new BillProductForm().handle)
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

    @del("/bills/products/:id")
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
