import { singleton, get, post, put, del, patch } from "@fusion.io/proton";
import Repository                                from "../../shoesStore/product/Repository";
import AllProducts                               from "../../shoesStore/GetElements";
import ProductsById                              from "../../shoesStore/GetElementById";

@singleton(Repository)
export default class ProductController {
    constructor(repos) {
        this.repos = repos;
    }

    @get('/products')
    async index(context) {
        context.body = await this.repos.get(new AllProducts());
    }

    @get("/products/:id")
    async detail (context) {
        let product = await this.repos.detail(new ProductsById(context.params.id));
        if(!product) {
            return context.body = {message: "Product not found!"}
        }
        return context.body = product;
    }

    @post('/products')
    async create(context) {
        context.body = await this.repos.create(context.request.body);
    }

    @put('/products/:id')
    async update (context) {
        let updatedProduct= await this.repos.update(new ProductsById(context.params.id), context.request.body);
        if(!updatedProduct) {
            return context.body = {message: "No Product found to update!"}
        }
        return context.body = {message: "Product Updated!"}

    }

    @patch('/products/:id')
    async restore (context) {
        let updatedProduct = await this.repos.restore(new ProductsById(context.params.id));
        if(!updatedProduct) {
            return context.body = {message: "No Product found!"}
        }
        return context.body = {message: "Product was restored!"}

    }

    @del('/products/:id')
    async delete (context) {
        let deletedProduct = await this.repos.delete(new ProductsById(context.params.id));
        if(!deletedProduct) {
            return context.body = {message: "No product found to delete!"}
        }
        return context.body = {message: "Product Deleted!"}
    }
}
