import { singleton, get, post, put, del, patch } from "@fusion.io/proton";
import Repository                       from "../shoesStore/Collection/Repository";
import AllCollections                   from "../shoesStore/GetElements";
import CollectionById                   from "../shoesStore/GetElementById";
import CollectionForm                   from "./middlewares/CollectionForm";


@singleton(Repository)
export default class CollectionController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/collections')
    async index(context) {
        context.body = await this.repos.get(new AllCollections());
    }

    @get("/collections/:id")
    async detail (context) {
        let collection = await this.repos.detail(new CollectionById(context.params.id));
        if(!collection) {
            return context.body = {message: "Collection not found!"}
        }
        return context.body = collection;
    }

    @post('/collections', new CollectionForm().handle)
    async create(context) {
        return context.body = await this.repos.create(context.collectionForm);
    }

    @put('/collections/:id')
    async update (context) {
        let updatedCollection = await this.repos.update(new CollectionById(context.params.id), context.request.body);
        if(!updatedCollection) {
            return context.body = {message: "No collection found to update!"}
        }
        return context.body = {message: "Collection Updated!"}

    }

    @patch('/collections/:id')
    async restore (context) {
        let updatedCollection = await this.repos.restore(new CollectionById(context.params.id));
        if(!updatedCollection) {
            return context.body = {message: "No collection found!"}
        }
        return context.body = {message: "Collection was restored!"}

    }

    @del('/collections/:id')
    async delete (context) {
        let deletedCollection = await this.repos.delete(new CollectionById(context.params.id));
        if(!deletedCollection) {
            return context.body = {message: "No collection found to delete!"}
        }
        return context.body = {message: "Collection Deleted!"}
    }

}
