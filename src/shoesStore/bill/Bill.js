export default class Bill {
    constructor(id, profileId, orderDate, paymentMethod) {
        this.props = {
            id,
            profile_id: profileId,
            order_date: orderDate,
            payment_method: paymentMethod
        }

    }

    get orderNotes () {
        return this.props.order_notes;
    }

    set orderNotes (value) {
        this.props.order_notes = value;
    }

    get status () {
        return this.props.status;
    }

    set status (value) {
        this.props.status = value;
    }

    get shippedDate () {
        return this.props.shipped_date;
    }

    set shippedDate (value) {
        this.props.shipped_date = value;
    }

    get customerName () {
        return this.props.customer_name;
    }

    set customerName (value) {
        this.props.customer_name = value;
    }

    get address () {
        return this.props.address;
    }

    set address (value) {
        this.props.address = value;
    }

    get phone () {
        return this.props.phone;
    }

    set phone (value) {
        this.props.phone = value;
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