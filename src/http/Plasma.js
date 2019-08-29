import {Plasma as CorePlasma, inject, Kernel, Router} from "@fusion.io/proton";
import CollectionController     from "./controller/CollectionController";
import ModelController          from "./controller/ModelController";
import BodyParser               from "koa-bodyparser";
import ProductController        from "./controller/ProductController";
import HelloController          from "./controller/HelloController";
import BillController           from "./controller/BillController";
import BillProductController    from "./controller/BillProductController";
import UserController           from "./controller/UserController";


export default class Plasma extends CorePlasma {

    @inject(Kernel, Router)
    boot(kernel, router) {

        kernel.use(BodyParser());
        kernel.use(router.routes());
        kernel.use(router.allowedMethods());

        router.controller(HelloController);
        router.controller(CollectionController);
        router.controller(ModelController);
        router.controller(ProductController);
        router.controller(UserController);
        router.controller(BillProductController);
        router.controller(BillController);
    }
}
