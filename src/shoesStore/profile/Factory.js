import Profile from "./profile";

export default class Factory {

    static make(raw) {
        const profile = new Profile(undefined, raw.email, raw.credential_id, raw.role);
        profile.address = raw.address;
        profile.phone = raw.phone;
        profile.gender = raw.gender;
        profile.avatar = raw.avatar;
        profile.name = raw.name;
        profile.createdAt = new Date();

        return profile.toJson();
    }

    static update(raw) {
        const profile = new Profile(undefined, raw.email, raw.credential_id, raw.role);
        profile.address = raw.address;
        profile.phone = raw.phone;
        profile.gender = raw.gender;
        profile.avatar = raw.avatar;
        profile.name = raw.name;
        profile.updatedAt = new Date();

        return profile.toJson();
    }

    static build(raw) {
        if (!raw) {
            return null;
        }
        const profile = new Profile(undefined, raw.email, raw.credential_id, raw.role);
        profile.address = raw.address;
        profile.phone = raw.phone;
        profile.gender = raw.gender;
        profile.avatar = raw.avatar;
        profile.name = raw.name;
        profile.createdAt = new Date();

        return profile.toJson();
    }
    static builds(raws) {
        if (!raws || !isArray(raws) || raws.length < 0) {
            return null;
        }
        raws.forEach((raw, index, profile) => {
            profile[index] = this.build(raw);
        });
        return raws;
    }
}
