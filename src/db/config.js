import  dotenv from 'dotenv'
import assert from 'assert'
dotenv.config();
const {HOST_URL,HOST,PORT,SQL_SERVER,SQL_PORT,SQL_USER,SQL_DB,SQL_PWS} = process.env;
const SQL_ENCRYPT = process.env.sql_ENCRYPT === "true";

assert(HOST,'host is required');
assert(PORT,'port is required');

const config = {
    url : HOST_URL,
    host : HOST,
    port :PORT,
    sql :{
        server : SQL_SERVER,
        user :SQL_PORT,
        passward :SQL_PWS,
        database : SQL_DB,
        options:{
            encrypt :SQL_ENCRYPT,
            enableArithAbort : true
        }
    },
    jwt_secret: JWT_SECRET
};
export default config;
