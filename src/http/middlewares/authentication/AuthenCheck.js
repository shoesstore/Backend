import { singleton} from "@fusion.io/core";
import jwt          from 'jsonwebtoken';

@singleton()
export default class AuthenCheck {
    async  check(context, next) {
        const token = context.request.header.token;
        if (token) {
            jwt.verify(token, process.env.CONFIG_JWT, async (err, decoded) => {
                if (err) {
                    context.body = "invalid token"
                }else {
                    context.decoded = decoded;
                    await next();
                }
            })
        } else {
            context.body = "No token provider";
        }
    }
}
