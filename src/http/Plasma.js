import {Plasma as CorePlasma, inject, Kernel, Router} from "@fusion.io/proton";
import HelloController          from "./HelloController";
import CollectionController     from "./CollectionController";
import ModelController          from "./ModelController";
import BodyParser               from "koa-bodyparser";
import ProductController        from "./ProductController";
import BillProductController    from "./BillProductController";
import BillController           from "./BillController";
import UserController           from "./UserController";

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
