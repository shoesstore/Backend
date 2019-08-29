import BillProduct from "./BillProduct";
import moment from "moment";

export default class Factory {
    static make (raw) {
        let billProduct = new BillProduct(undefined, raw.bill_id, raw.product_id, raw.name);
        billProduct.quantity  = raw.quantity;
        billProduct.price     = raw.price;
        billProduct.size      = raw.size;
        billProduct.color     = raw.color;
        billProduct.createdAt = moment().toDate();

        return billProduct.toJSON();
    }

    static update (raw) {
        let billProduct = new BillProduct(undefined, raw.bill_id, raw.product_id, raw.name);
        billProduct.quantity  = raw.quantity;
        billProduct.price     = raw.price;
        billProduct.size      = raw.size;
        billProduct.color     = raw.color;
        billProduct.updatedAt = moment().toDate();

        return billProduct.toJSON();
    }

    static build (raw) {
        if(!raw) {
            return null
        }

        let billProduct = new BillProduct(raw.id, raw.bill_id, raw.product_id, raw.name);
        billProduct.quantity  = raw.quantity;
        billProduct.price     = raw.price;
        billProduct.size      = raw.size;
        billProduct.color     = raw.color;
        billProduct.createdAt = raw.created_at;
        billProduct.updatedAt = raw.updated_at;
        billProduct.deletedAt = raw.deleted_at;

        return billProduct.toJSON();
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
