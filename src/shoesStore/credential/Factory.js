import Credential from "./Credential";

export default class Factory {
    static make(raw) {
        let user = new Credential(undefined, raw.username, raw.password);
        user.apiToken = raw.api_token;
        user.createdAt = new Date();
        user.updatedAt = raw.updated_at;
        user.deletedAt = raw.deleted_at;

        return user.toJson();
    }
    static update(raw) {
        let user = new Credential(undefined, raw.username, raw.password);
        user.apiToken = raw.api_token;
        user.createdAt = raw.created_at;
        user.updatedAt = new Date();
        user.deletedAt = raw.deleted_at;

        return user.toJson();
    }

    static build(raw) {
        if (!raw) {
            return null;
        }
        let user = new Credential(raw.id, raw.username, raw.password);
        user.apiToken = raw.api_token;
        user.createdAt = raw.created_at;
        user.updatedAt = raw.updated_at;
        user.deletedAt = raw.deleted_at;

        return user.toJson();
    }

    static builds(raws) {
        if (!raw || raws.length < 0 ||!Array.isArray(raws)) {
            raws.forEach((raw, index, user) => {
                user[index] = this.build(raw);
            })
        }

        return raws;
    }
}