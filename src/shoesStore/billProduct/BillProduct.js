export default class BillProduct {
    constructor(id, billId, product_Id, name) {
        this.props = {
            id,
            bill_id: billId,
            product_id: product_Id,
            name
        }
    }

    get quantity () {
        return this.props.quantity;
    }

    set quantity (value) {
        this.props.quantity = value;
    }

    get price () {
        return this.props.price;
    }

    set price (value) {
        this.props.price = value
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

    get createdAt () {
        return this.props.created_at;
    }

    set createdAt (value) {
        this.props.created_at = value;
    }

    get updatedAt () {
        return this.props.updated_at;
    }

    set updatedAt (value) {
        this.props.updated_at = value;
    }

    get deletedAt () {
        return this.props.deleted_at;
    }

    set deletedAt (value) {
        this.props.deleted_at = value;
    }

    toJSON() {
        return this.props;
    }
}