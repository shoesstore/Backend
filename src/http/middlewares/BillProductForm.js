import {singleton}  from "@fusion.io/core";
import Ajv          from 'ajv';

const ajv = new Ajv();
@singleton()
export default class BillProductForm {
    async handle(context, next) {
        const schema = {
            "type": "object",
            "properties": {
                "bill_id": { "type": "number" },
                "product_id": { "type": "number" },
                "quantity": { "type": "number" },
                "price": { "type": "number" },
                "name": { "type": "string" },
                "size": { "type": "string" },
                "color": { "type": "string" }
            },
            "required": [ "bill_id", "product_id","quantity", "price", "name", "size", "color"]
        };

        let validate = ajv.compile(schema);

        if(validate(context.request.body)) {
            await next();
        } else {
            throw Error("Input data is not in a valid format!");
        }
    }
}
