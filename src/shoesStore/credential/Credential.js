export default class Credential {
    constructor(id, username, password) {
        this.props = {
            id,
            username,
            password
        }
    }
    set apiToken (value) {
        this.props.api_token = value;
    }
    get apiToken() {
        return this.props.api_token;
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
