import Bill     from "./Bill";
import moment   from "moment";

export default class Factory {
    static make (raw) {
        let bill = new Bill(undefined, raw.profile_id, raw.order_date, raw.payment_method);
        bill.orderNotes = raw.order_notes;
        bill.status     = raw.status;
        bill.shippedDate = raw.shipped_date;
        bill.customerName = raw.customer_name;
        bill.address     = raw.address;
        bill.phone      = raw.phone;
        bill.createdAt  = moment().toDate();

        return bill.toJSON();
    }

    static update (raw) {
        let bill = new Bill(undefined, raw.profile_id, raw.order_date, raw.payment_method);
        bill.orderNotes = raw.order_notes;
        bill.status     = raw.status;
        bill.shippedDate = raw.shipped_date;
        bill.customerName = raw.customer_name;
        bill.address     = raw.address;
        bill.phone      = raw.phone;
        bill.updatedAt = moment().toDate();

        return bill.toJSON();

    }

    static build (raw) {
        if(!raw) {
            return null;
        }

        let bill = new Bill(raw.id, raw.profile_id, raw.order_date, raw.payment_method);
        bill.orderNotes = raw.order_notes;
        bill.status     = raw.status;
        bill.shippedDate = raw.shipped_date;
        bill.customerName = raw.customer_name;
        bill.address     = raw.address;
        bill.phone      = raw.phone;
        bill.createdAt    = raw.created_at;
        bill.updatedAt    = raw.updated_at;
        bill.deletedAt    = raw.deleted_at;

        return bill.toJSON();

    }

    static builds (raws) {
        if (!raws || !Array.isArray(raws) || raws.length < 1) {
            return [];
        }
        raws.forEach((raw, key, bills) => {
            bills[key] = this.build(raw)
        });
        return raws
    }
}