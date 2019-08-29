import {singleton}  from "@fusion.io/core";
import Ajv          from 'ajv';

const ajv = new Ajv();
@singleton()
export default class ModelForm {
    async handle(context, next) {
        const schema = {
            "type": "object",
            "properties": {
                "name": { "type": "string", "minLength": 6},
                "collection_id": { "type": "number" },
                "price": { "type": "number"},
                "status": { "type": "string"},
                "slug": { "type": "string"},
                "sizes": { items: { "type": "string"}},
                "colors": { items: { "type": "string"}},
                "images": { items: { "type": "string"}},
                "tags": { items: { "type": "string"}},
                "description": { "type": "string"}

            },
            "required": [
                "name", "price", "status", "slug",
                "sizes", "colors", "images", "phone",
                "created_at", "updated_at", "deleted_at"
            ]
        };

        let validate = ajv.compile(schema);

        if(validate(context.request.body)) {
            await next();
        } else {
            throw Error("Input data is not in a valid format!");
        }
    }
}
