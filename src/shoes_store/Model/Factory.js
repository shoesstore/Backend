import Model    from "./Model";
import moment        from "moment";
import { singleton } from "@fusion.io/proton";

@singleton()
export default class Factory {
    static make (raw) {
        const model = new Model(
            undefined, raw.name, raw.collection_id, raw.price, raw.status,
            raw.slug, raw.sizes, raw.colors, raw.images, raw.tags, raw.description);
        model.createdAt    = moment().toDate();

        return model.toJSON();
    }

    static update (raw) {
        const model       = new Model(null, raw.name, raw.collection_id, raw.price, raw.status);
        model.slug        = raw.slug;
        model.sizes       = raw.sizes;
        model.colors      = raw.colors;
        model.images      = raw.images;
        model.tags        = raw.tags;
        model.description = raw.description;
        model.updatedAt   = moment().toDate();

        return model.toJSON();
    }

    static build (raw) {
        if (!raw) {
            return null;
        }

        const model       = new Model(raw.id, raw.name, raw.collection_id, raw.price, raw.status);
        model.slug        = raw.slug;
        model.sizes       = raw.sizes;
        model.colors      = raw.colors;
        model.images      = raw.images;
        model.tags        = raw.tags;
        model.description = raw.description;
        model.createdAt   = raw.created_at;
        model.updatedAt   = raw.updated_at;
        model.deletedAt   = raw.deleted_at;

        return model.toJSON();
    }

    static builds (raws) {
        if (!raws || !Array.isArray(raws) || raws.length < 1) {
            return [];
        }
        raws.forEach((raw, key, models) => {
            models[key] = this.build(raw);
        });
        return raws
    }
}
