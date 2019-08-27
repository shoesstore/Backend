export default class Model {
    constructor (id, name, collection_id, price, status, slug, sizes, colors, images, tags, description) {
        this.props = {
            id,
            name,
            collection_id,
            price,
            status,
            slug,
            sizes,
            colors,
            images,
            tags,
            description
        }
    }

    get name () {
        return this.props.name;
    }

    set name (value) {
        this.props.name = value;
    }

    get collectionId () {
        return this.props.collection_id;
    }

    set collectionId (value) {
        this.props.collection_id = value;
    }

    get price () {
        return this.props.price;
    }

    set price (value) {
        this.props.price = value;
    }

    get status () {
        return this.props.status;
    }

    set status (value) {
        this.props.status = value;
    }

    get slug () {
        return this.props.slug;
    }

    set slug (value) {
        this.props.slug = value;
    }
    get sizes () {
        return this.props.sizes;
    }

    set sizes (value) {
        this.props.sizes = value;
    }

    get colors () {
        return this.props.colors;
    }

    set colors (value) {
        this.props.colors = value;
    }

    get images () {
        return this.props.images;
    }

    set images (value) {
        this.props.images = value;
    }

    get tags () {
        return this.props.tags;
    }

    set tags (value) {
        this.props.tags = value;
    }

    get description () {
        return this.props.description;
    }

    set description (value) {
        this.props.description = value;
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