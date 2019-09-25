export default class Collection {
    constructor (id, parentId, name, slug) {
        this.props = {
            id,
            parent_id: parentId,
            name,
            slug
        }
    }

    get relatedSlugs () {
        return this.props.related_slugs;
    }

    set relatedSlugs (value) {
        this.props.related_slugs = value;
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

    toJSON () {
        return this.props;
    }
}
