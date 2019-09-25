export default  class  Product {
    constructor ( id, size, color, model_id, quantity, unit_price){
        this.props = {
            id,
            size,
            model_id,
            quantity,
            unit_price
        }
    }

    get size () {
        return this.props.size;
    }
    set size (value) {
        this.props.size = value;
    }
    get color () {
        return this.props.color;
    }
    set color (value) {
        this.props.color = value;
    }

    get quantity () {
        return this.props.quantity;
    }
    set quantity (value) {
        this.props.quantity = value;
    }
    get unitPrice () {
        return this.props.unit_price;
    }
    set unitPrice (value) {
        this.props.unit_price = value;
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
