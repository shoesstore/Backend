import {Plasma as CorePlasma, inject, Kernel, Router} from "@fusion.io/proton";
import HelloController      from "./HelloController";
import CollectionController from "./ModelController";
import BodyParser           from "koa-bodyparser";

export default class Plasma extends CorePlasma {
    @inject(Kernel, Router)
    boot(kernel, router) {

        kernel.use(BodyParser());
        kernel.use(router.routes());
        kernel.use(router.allowedMethods());
        router.controller(HelloController);
        router.controller(CollectionController);

    }
}
