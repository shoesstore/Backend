import {singleton} from "@fusion.io/core";
import bcrypt  from "bcrypt" ;
@singleton()
export default class BcryptHasherAdapter {


    async generate(value, round) {
        return await bcrypt.hash(value, round);
    }

    check(value, hashed) {
        return bcrypt.compare(value, hashed);
    }
}
