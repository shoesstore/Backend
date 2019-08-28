import {singleton} from "@fusion.io/core";
const Ajv = require('ajv');

const ajv = new Ajv();

@singleton()
export default class BillForm {
    async handle(context, next) {
        const schema = {
            "type": "object",
            "properties": {
                "profile_id": { "type": "number" },
                "order_date": {
                    "type": "string",
                    "format": "date"
                },
                "payment_method": { "type": "string" },
                "order_notes": { "type": "string" },
                "status": { "type": "string" },
                "shipped_date": {
                    "type": "string",
                    "format": "date"
                },
                "customer_name": {
                    "type": "string",
                    "minLength": 6
                },
                "address": { "type": "string" },
                "phone": { "type": "string" }

            },
            "required": [ "profile_id", "order_date", "payment_method", "status", "shipped_date", "customer_name", "address", "phone" ]
        };

        let validate = ajv.compile(schema);

        if(validate(context.request.body)) {
            await next();
        } else {
            throw Error("Input Data Is Not A Valid");
        }
    }
}