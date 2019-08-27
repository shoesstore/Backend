import {Plasma as CorePlasma, inject, Kernel, Router} from "@fusion.io/proton";
import HelloController from "./HelloController";
import BodyParser from "koa-bodyparser";
import BillController from "./BillController";
import BillProductController from "./BillProductController";

export default class Plasma extends CorePlasma {

    @inject(Kernel, Router)
    boot(kernel, router) {

        kernel.use(BodyParser());
        router.controller(HelloController);
        router.controller(BillProductController);
        router.controller(BillController);
        kernel.use(router.routes());
        kernel.use(router.allowedMethods());
    }
}
