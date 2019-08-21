import { singleton, get } from "@fusion.io/proton";

@singleton()
export default class HelloController {

    @get('/')
    async index(context) {
       context.body = {
           message: "foo-baz"
       }
    }
}
