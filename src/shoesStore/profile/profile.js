export default class Profile {
    constructor(id, email, credentialId, role) {
        this.props = {
            id,
            email,
            credential_id: credentialId,
            role
        }
    }
    set name(value) {
        this.props.name = value;
    }
    get name() {
        return this.props.name;
    }

    set address(value) {
        this.props.address = value;
    }
    get address() {
        return this.props.address;
    }
    set phone(value) {
        this.props.phone = value;
    }
    get phone() {
        return this.props.phone;
    }
    set gender(value) {
        this.props.gender = value;
    }
    get gender() {
        return this.props.gender;
    }
    set avatar(val) {
       this.props.avatar = val;
    }
    get avatar() {
        return this.props.avatar;
    }
    set createdAt (value) {
        this.props.created_at = value;
    }

    get createdAt () {
        return this.props.created_at;
    }

    set updatedAt (value) {
        this.props.updated_at = value;
    }

    get updatedAt () {
        return this.props.updated_at;
    }

    set deletedAt (value) {
        this.props.deleted_at = value;
    }

    get deletedAt () {
        return this.props.deleted_at;
    }

    toJson() {
        return this.props;
    }
}
