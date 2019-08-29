import Model    from "./Model";
import moment        from "moment";
import { singleton } from "@fusion.io/proton";

@singleton()
export default class Factory {
    static make (raw) {
        const model = new Model(undefined, raw.name, raw.collection_id);
        model.colors = raw.colors;
        model.price = raw.price;
        model.status = raw.status;
        model.slug = raw.slug;
        model.sizes = raw.sizes;
        model.colors = raw.color;
        model.images = raw.images;
        model.tags = raw.tags;
        model.description = raw.description;
        model.createdAt    = moment().toDate();

        return model.toJSON();
    }

    static update (raw) {
        const model = new Model(undefined, raw.name, raw.collection_id);
        model.colors = raw.colors;
        model.price = raw.price;
        model.status = raw.status;
        model.slug = raw.slug;
        model.sizes = raw.sizes;
        model.colors = raw.color;
        model.images = raw.images;
        model.tags = raw.tags;
        model.description = raw.description;
        model.updatedAt    = moment().toDate();

        return model.toJSON();
    }

    static build (raw) {
        if (!raw) {
            return null;
        }

        const model = new Model(undefined, raw.name, raw.collection_id);
        model.colors = raw.colors;
        model.price = raw.price;
        model.status = raw.status;
        model.slug = raw.slug;
        model.sizes = raw.sizes;
        model.colors = raw.color;
        model.images = raw.images;
        model.tags = raw.tags;
        model.description = raw.description;
        model.createdAt    = raw.created_at;
        model.updatedAt = raw.updated_at;
        model.deletedAt = raw.deleted_at;

        return model.toJSON();

        return model.toJSON();
    }

    static builds (raws) {
        if (!raws || !Array.isArray(raws) || raws.length < 1) {
            return [];
        }
        raws.forEach((raw, key, models) => {
            models[key] = this.build(raw);
        });
        return raws;
    }
}
