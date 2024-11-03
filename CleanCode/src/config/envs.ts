import "dotenv/config";
import {get} from "env-var";

export const envs ={
    MYSQL_PORT : get("MYSQL_PORT").default("3306").asPortNumber(),
    MYSQL_USER : get("MYSQL_USER").default("root").asString(),
    MYSQL_PASSWORD : get("MYSQL_PASSWORD").default("").asString(),
    MYSQL_DB : get("MYSQL_DB").required().asString(),
    MYSQL_LOCALHOST:  get("MYSQL_LOCALHOST").default("localhost").asString(),
    SERVER_PORT:get("SERVER_PORT").default("4200").asPortNumber(),
}