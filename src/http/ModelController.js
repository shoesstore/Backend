import { singleton, get, post, put, del, patch }
                  from "@fusion.io/proton";
import Repository from "../shoes_store/Model/Repository";
import AllModels  from "../shoes_store/GetElements";
import ModelById  from "../shoes_store/GetElementById";

@singleton(Repository)
export default class ModelController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/models')
    async index(context) {
        context.body = await this.repos.get(new AllModels());
    }

    @get("/models/:id")
    async detail (context) {
        let Model = await this.repos.detail(new ModelById(context.params.id));
        if(!Model) {
            return context.body = {message: "Model not found!"}
        }
        return context.body = Model;
    }

    @post('/models')
    async create(context) {
        context.body = await this.repos.create(context.request.body);
    }

    @put('/models/:id')
    async update (context) {
        let updatedModel = await this.repos.update(new ModelById(context.params.id), context.request.body);
        if(!updatedModel) {
            return context.body = {message: "No Model found to update!"}
        }
        return context.body = {message: "Model Updated!"}

    }

    @patch('/models/:id')
    async restore (context) {
        let updatedModel = await this.repos.restore(new ModelById(context.params.id));
        if(!updatedModel) {
            return context.body = {message: "No Model found!"}
        }
        return context.body = {message: "Model was restored!"}

    }

    @del('/models/:id')
    async delete (context) {
        let deletedModel = await this.repos.delete(new ModelById(context.params.id));
        if(!deletedModel) {
            return context.body = {message: "No Model found to delete!"}
        }
        return context.body = {message: "Model Deleted!"}
    }

}
