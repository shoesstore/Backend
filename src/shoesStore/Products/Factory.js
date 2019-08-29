import  Product    from "./Product";
import  moment      from "moment";
import  {singleton} from  "@fusion.io/proton";

@singleton()
export default class Factory {
    static make (raw) {
        const product      = new Product(undefined,raw.size, raw.color, raw.model_id, raw.quantity, raw.unit_price);
        product.size       = raw.size;
        product.quantity   = raw.quantity;
        product.color      = raw.color;
        product.unitPrice  = raw.unit_price;
        product.createdAt  = moment().toDate();

        return product.toJSON();
    }
    static update (raw) {
        const product     = new Product(null, raw.size, raw.color, raw.model_id, raw.quantity, raw.unit_price);
        product.size      = raw.size;
        product.quantity  = raw.quantity;
        product.color     = raw.color;
        product.unitPrice = raw.unit_price;
        product.updatedAt = moment().toDate();

        return product.toJSON();

    }
    static  build (raw) {
        if (!raw) {
            return null;
        }
        const  product    = new Product(raw.id, raw.size, raw.quantity, raw.color, raw.unit_price);
        product.size      = raw.size;
        product.quantity  = raw.quantity;
        product.color     = raw.color;
        product.unitPrice = raw.unit_price;
        product.createdAt = raw.created_at;
        product.updatedAt = raw.updated_at;
        product.deletedAt = raw.deleted_at;
        
        return  product.toJSON();
    }
    static  builds (raws) {
        if (!raws || !Array.isArray(raws) || raws.length<1) {
            return [];
        }
        raws.forEach((raw, key, product) => {
            product[key] = this.build(raw);
        });
        return  raws;
    }
}