import {singleton} from "@fusion.io/core";
const Ajv = require('ajv');

const ajv = new Ajv();

@singleton()
export default class CollectionForm {
    async handle(context, next) {
        const schema = {
            "type": "object",
            "properties": {
                "parentId": { "type": "number" },

                "name": {
                    "type": "string",
                    "minLength": 6
                },
                "slug": {
                    "type": "string",
                    "minLength": 6
                },

            },
            "required": ["name", "slug"]
        };

        let validate = ajv.compile(schema);

        if(validate(context.request.body)) {
            context.collectionForm = context.request.body;
            await next();
        } else {
            throw Error("Input data is not in a valid format!");
        }
    }
}
