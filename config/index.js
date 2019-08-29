require('dotenv').config();
module.exports = {
    "debug": true,
    "keys": [],
    "services": {},
    "authentication": {
        "default": "",
        "gateways": {
            "user.token": {
                protocol: "proton.token",
                options: {
                    privateKey: 'qwertyuiopasdfghjklzxcvbnm123456'
                }
            },
            "local": {
                protocol: "proton.local",
                options: {}
            }
        }
    },
    "authorization": {
        "default": "",
        "policies": {}
    },
    "locale": {
        "default": "",
        "presets": {}
    },
    "database": {
        "default": "shoes_store",
        "connections": {
            "shoes_store": {
                client: "pg",
                connection: {
                    charset  : 'utf8',
                    host : process.env.POSTGRES_HOST,
                    user : process.env.POSTGRES_USER,
                    password : process.env.POSTGRES_PASSWORD,
                    database : process.env.POSTGRES_DB
                }
            }
        },
        "migration": {
            directory: __dirname + "/../migrations"
        }
    },
    "view": "views"
};